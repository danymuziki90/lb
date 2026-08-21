"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  return (
    <section className="bg-light py-20 dark:bg-night/50 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        <SectionHeading
          label={t.interventionMap.label}
          title={t.interventionMap.title}
          subtitle={t.interventionMap.subtitle}
        />

        {/* Légende régions */}
        <div className="mb-8 flex flex-wrap justify-center gap-4 md:gap-6">
          {Object.entries(interventionRegions).map(([key, region]) => (
            <div key={key} className="flex items-center gap-2">
              <span
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: region.color }}
              />
              <span className="text-sm font-medium text-night/70 dark:text-white/70">
                {t.interventionMap.regions[key as keyof typeof t.interventionMap.regions]}
              </span>
            </div>
          ))}
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-5 lg:gap-12">
          {/* Carte SVG */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative lg:col-span-3"
          >
            <div className="overflow-hidden rounded-2xl border border-night/5 bg-gradient-to-br from-[#0B1F3A] to-[#132d4f] p-4 shadow-2xl dark:border-white/10 md:p-6">
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

                {/* Pays africains — fond */}
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
                      onMouseEnter={() =>
                        country && setActiveCountry(country.id)
                      }
                      onMouseLeave={() => setActiveCountry(null)}
                      onFocus={() => country && setActiveCountry(country.id)}
                      onBlur={() => setActiveCountry(null)}
                      tabIndex={isIntervention ? 0 : -1}
                      aria-label={country?.name}
                    />
                  );
                })}

                {/* Marqueurs drapeaux */}
                {markerPositions.map(({ country, x, y }) => {
                  const isActive = activeCountry === country.id;
                  if (!interventionNumericIds.has(country.numericId)) return null;

                  return (
                    <g
                      key={country.id}
                      transform={`translate(${x}, ${y})`}
                      className="pointer-events-none"
                    >
                      {isActive && (
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

              {/* Tooltip pays actif */}
              <AnimatePresence>
                {activeData && (
                  <motion.div
                    key={activeData.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute bottom-6 left-6 right-6 flex items-center gap-4 rounded-xl border border-gold/30 bg-night/95 px-5 py-4 backdrop-blur-md"
                  >
                    <CountryFlag
                      iso2={activeData.iso2}
                      alt={`${t.interventionMap.flagAlt} ${activeData.name}`}
                      size={40}
                    />
                    <div>
                      <p className="font-display text-lg font-bold text-white">
                        {activeData.name}
                      </p>
                      <p className="text-sm text-gold">
                        {t.interventionMap.regions[activeData.region]}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Liste pays avec drapeaux */}
          <div className="flex flex-col gap-3 lg:col-span-2">
            {interventionCountries.map((country, index) => (
              <CountryCard
                key={country.id}
                country={country}
                index={index}
                isActive={activeCountry === country.id}
                onHover={setActiveCountry}
                regionLabels={t.interventionMap.regions}
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
  onHover,
  regionLabels,
}: {
  country: InterventionCountry;
  index: number;
  isActive: boolean;
  onHover: (id: string | null) => void;
  regionLabels: Record<InterventionCountry["region"], string>;
}) {
  const region = interventionRegions[country.region];

  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, x: 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
      onMouseEnter={() => onHover(country.id)}
      onMouseLeave={() => onHover(null)}
      onFocus={() => onHover(country.id)}
      onBlur={() => onHover(null)}
      className={`flex w-full items-center gap-4 rounded-xl border p-4 text-left transition-all duration-300 ${
        isActive
          ? "border-gold bg-gold/10 shadow-lg shadow-gold/10"
          : "border-night/5 bg-white hover:border-institutional/20 hover:shadow-md dark:border-white/10 dark:bg-night dark:hover:border-gold/30"
      }`}
    >
      <CountryFlag
        iso2={country.iso2}
        alt={`Drapeau ${country.name}`}
        size={40}
        className={`shrink-0 transition-transform duration-300 ${isActive ? "scale-110" : ""}`}
      />
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-night dark:text-white">
          {country.name}
        </p>
        <div className="mt-1 flex items-center gap-2">
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: region.color }}
          />
          <span className="text-xs text-night/50 dark:text-white/50">
            {regionLabels[country.region]}
          </span>
        </div>
      </div>
      <span
        className={`shrink-0 rounded-md px-2 py-1 text-xs font-bold transition-colors ${
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
