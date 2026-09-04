"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { feature } from "topojson-client";
import { geoMercator, geoPath, geoCentroid } from "d3-geo";
import type { Feature, FeatureCollection, Geometry } from "geojson";
import type { Topology } from "topojson-specification";
import countries110m from "world-atlas/countries-110m.json";
import SectionHeading from "@/components/ui/SectionHeading";
import CountryFlag from "@/components/ui/CountryFlag";
import { useLanguage } from "@/components/layout/LanguageProvider";
import {
  interventionCountries,
  interventionRegions,
  getFlagUrl,
  type InterventionCountry,
} from "@/lib/data";

const WIDTH = 720;
const HEIGHT = 720;

const interventionNumericIds = new Set(
  interventionCountries.map((c) => c.numericId)
);

const interventionByNumericId = Object.fromEntries(
  interventionCountries.map((c) => [c.numericId, c])
);

function isInAfrica(feature: Feature<Geometry>): boolean {
  const [lon, lat] = geoCentroid(feature);
  return lon >= -20 && lon <= 55 && lat >= -36 && lat <= 38;
}

export default function InterventionMap() {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const [activeCountry, setActiveCountry] = useState<string | null>(null);

  const { africaFeatures, pathGenerator, markerPositions } = useMemo(() => {
    const topology = countries110m as unknown as Topology;
    const collection = feature(
      topology,
      topology.objects.countries
    ) as FeatureCollection;

    const africa = collection.features.filter(isInAfrica);

    const projection = geoMercator()
      .center([15, 8])
      .scale(520)
      .translate([WIDTH / 2, HEIGHT / 2]);

    const pathGen = geoPath(projection);

    const markers = interventionCountries.map((country) => {
      const geoFeature = africa.find(
        (f) => f.id?.toString() === country.numericId
      );
      if (!geoFeature) return { country, x: 0, y: 0 };
      const [x, y] = geoCentroid(geoFeature);
      const projected = projection([x, y]);
      return {
        country,
        x: projected?.[0] ?? 0,
        y: projected?.[1] ?? 0,
      };
    });

    return {
      africaFeatures: africa,
      pathGenerator: pathGen,
      markerPositions: markers,
    };
  }, []);

  const activeData = interventionCountries.find((c) => c.id === activeCountry);

  const handleCountryToggle = (id: string) => {
    setActiveCountry((prev) => (prev === id ? null : id));
  };

  return (
    <section className="bg-light py-14 sm:py-20 dark:bg-night/50 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        <SectionHeading
          label={t.interventionMap.label}
          title={t.interventionMap.title}
          subtitle={t.interventionMap.subtitle}
        />

        {/* Legend */}
        <div className="mb-6 sm:mb-8 flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
          {Object.entries(interventionRegions).map(([key, region]) => (
            <div key={key} className="flex items-center gap-2">
              <span
                className="h-2.5 w-2.5 rounded-full sm:h-3 sm:w-3"
                style={{ backgroundColor: region.color }}
              />
              <span className="text-xs sm:text-sm font-medium text-night/70 dark:text-white/70">
                {t.interventionMap.regions[key as keyof typeof t.interventionMap.regions]}
              </span>
            </div>
          ))}
        </div>

        <div className="mx-auto grid w-[calc(100%-1rem)] max-w-6xl items-start gap-8 sm:w-full lg:grid-cols-5 lg:gap-12">
          {/* SVG Map Container */}
          <motion.div
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: shouldReduceMotion ? 0.2 : 0.65 }}
            className="relative lg:col-span-3"
          >
            <div className="relative overflow-hidden rounded-2xl border border-night/5 bg-gradient-to-br from-[#0B1F3A] to-[#132d4f] p-3 sm:p-4 md:p-6 shadow-xl dark:border-white/10">
              <svg
                viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
                className="h-auto w-full"
                role="img"
                aria-label={t.interventionMap.mapAriaLabel}
              >
                <defs>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <linearGradient
                    id="activeGrad"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#C8A96B" />
                    <stop offset="100%" stopColor="#e8c878" />
                  </linearGradient>
                </defs>

                {/* African countries */}
                {africaFeatures.map((geoFeature) => {
                  const id = geoFeature.id?.toString() ?? "";
                  const isIntervention = interventionNumericIds.has(id);
                  const country = interventionByNumericId[id];
                  const isActive = country?.id === activeCountry;
                  const d = pathGenerator(geoFeature) ?? "";

                  return (
                    <path
                      key={id}
                      d={d}
                      fill={
                        isActive
                          ? "url(#activeGrad)"
                          : isIntervention
                            ? interventionRegions[country!.region].color
                            : "rgba(255,255,255,0.07)"
                      }
                      fillOpacity={
                        isActive ? 1 : isIntervention ? 0.85 : 1
                      }
                      stroke={
                        isActive
                          ? "#C8A96B"
                          : isIntervention
                            ? "rgba(255,255,255,0.5)"
                            : "rgba(255,255,255,0.12)"
                      }
                      strokeWidth={isActive ? 1.5 : isIntervention ? 0.8 : 0.4}
                      className="cursor-pointer transition-all duration-300"
                      filter={isActive ? "url(#glow)" : undefined}
                      onClick={() => country && handleCountryToggle(country.id)}
                      onMouseEnter={() =>
                        country && setActiveCountry(country.id)
                      }
                      onMouseLeave={() => {}}
                      onFocus={() => country && setActiveCountry(country.id)}
                      tabIndex={isIntervention ? 0 : -1}
                      aria-label={country?.name}
                    />
                  );
                })}

                {/* Flag markers */}
                {markerPositions.map(({ country, x, y }) => {
                  const isActive = activeCountry === country.id;
                  if (!interventionNumericIds.has(country.numericId)) return null;

                  return (
                    <g
                      key={country.id}
                      transform={`translate(${x}, ${y})`}
                      className="cursor-pointer"
                      onClick={() => handleCountryToggle(country.id)}
                    >
                      {isActive && !shouldReduceMotion && (
                        <circle
                          r={18}
                          fill="none"
                          stroke="#C8A96B"
                          strokeWidth={1}
                          opacity={0.6}
                        >
                          <animate
                            attributeName="r"
                            from="12"
                            to="24"
                            dur="1.5s"
                            repeatCount="indefinite"
                          />
                          <animate
                            attributeName="opacity"
                            from="0.8"
                            to="0"
                            dur="1.5s"
                            repeatCount="indefinite"
                          />
                        </circle>
                      )}
                      <circle
                        r={isActive ? 14 : 11}
                        fill="#0B1F3A"
                        stroke="#C8A96B"
                        strokeWidth={1.5}
                      />
                      <image
                        href={getFlagUrl(country.iso2, 40)}
                        x={-15}
                        y={-10}
                        width={30}
                        height={20}
                        clipPath="inset(0 round 2px)"
                      />
                    </g>
                  );
                })}
              </svg>

              {/* Active country tooltip / badge */}
              <AnimatePresence>
                {activeData && (
                  <motion.div
                    key={activeData.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between gap-3 rounded-xl border border-gold/30 bg-night/95 p-3 backdrop-blur-md sm:bottom-4 sm:left-4 sm:right-4 sm:p-4"
                  >
                    <div className="flex items-center gap-3">
                      <CountryFlag
                        iso2={activeData.iso2}
                        alt={`${t.interventionMap.flagAlt} ${activeData.name}`}
                        size={40}
                        className="shrink-0"
                      />
                      <div>
                        <p className="font-display text-sm font-bold text-white sm:text-base">
                          {activeData.name}
                        </p>
                        <p className="text-xs text-gold">
                          {t.interventionMap.regions[activeData.region]}
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setActiveCountry(null)}
                      className="rounded-full bg-white/10 px-2.5 py-1 text-xs text-white/70 hover:bg-white/20 hover:text-white"
                      aria-label="Fermer"
                    >
                      &times;
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Country card list */}
          <div className="flex flex-col gap-2.5 sm:gap-3 lg:col-span-2">
            {interventionCountries.map((country, index) => (
              <CountryCard
                key={country.id}
                country={country}
                index={index}
                isActive={activeCountry === country.id}
                onSelect={handleCountryToggle}
                regionLabels={t.interventionMap.regions}
                shouldReduceMotion={shouldReduceMotion}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CountryCard({
  country,
  index,
  isActive,
  onSelect,
  regionLabels,
  shouldReduceMotion,
}: {
  country: InterventionCountry;
  index: number;
  isActive: boolean;
  onSelect: (id: string) => void;
  regionLabels: Record<InterventionCountry["region"], string>;
  shouldReduceMotion: boolean | null;
}) {
  const region = interventionRegions[country.region];

  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: shouldReduceMotion ? 0 : index * 0.05 }}
      onClick={() => onSelect(country.id)}
      className={`flex min-h-[46px] w-full items-center gap-3 sm:gap-4 rounded-xl border p-3 sm:p-4 text-left transition-all duration-300 ${
        isActive
          ? "border-gold bg-gold/10 shadow-md shadow-gold/10"
          : "border-night/5 bg-white hover:border-institutional/20 hover:shadow-sm dark:border-white/10 dark:bg-night dark:hover:border-gold/30"
      }`}
    >
      <CountryFlag
        iso2={country.iso2}
        alt={`Drapeau ${country.name}`}
        size={40}
        className={`shrink-0 transition-transform duration-300 ${isActive ? "scale-105" : ""}`}
      />
      <div className="min-w-0 flex-1">
        <p className="truncate text-xs sm:text-sm font-semibold text-night dark:text-white">
          {country.name}
        </p>
        <div className="mt-0.5 flex items-center gap-1.5 sm:gap-2">
          <span
            className="h-1.5 w-1.5 rounded-full shrink-0"
            style={{ backgroundColor: region.color }}
          />
          <span className="truncate text-[11px] sm:text-xs text-night/50 dark:text-white/50">
            {regionLabels[country.region]}
          </span>
        </div>
      </div>
      <span
        className={`shrink-0 rounded-md px-2 py-0.5 text-xs font-bold transition-colors ${
          isActive
            ? "bg-gold text-night"
            : "bg-institutional/10 text-institutional dark:bg-gold/10 dark:text-gold"
        }`}
      >
        {country.code}
      </span>
    </motion.button>
  );
}
