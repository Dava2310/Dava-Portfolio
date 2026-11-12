import { useTranslation } from "@/features/i18n";
import agents from "@/assets/skills/agents.svg";
import aws from "@/assets/skills/aws.svg";
import caddy from "@/assets/skills/caddy.svg";
import cplusplus from "@/assets/skills/cplusplus.svg";
import docker from "@/assets/skills/docker.svg";
import express from "@/assets/skills/express.svg";
import flask from "@/assets/skills/flask.svg";
import git from "@/assets/skills/git.svg";
import githubactions from "@/assets/skills/githubactions.svg";
import gnubash from "@/assets/skills/gnubash.svg";
import javascript from "@/assets/skills/javascript.svg";
import json from "@/assets/skills/json.svg";
import jsonwebtokens from "@/assets/skills/jsonwebtokens.svg";
import leaflet from "@/assets/skills/leaflet.svg";
import linux from "@/assets/skills/linux.svg";
import mcp from "@/assets/skills/modelcontextprotocol.svg";
import mysql from "@/assets/skills/mysql.svg";
import nestjs from "@/assets/skills/nestjs.svg";
import nextjs from "@/assets/skills/nextdotjs.svg";
import numpy from "@/assets/skills/numpy.svg";
import openjdk from "@/assets/skills/openjdk.svg";
import pandas from "@/assets/skills/pandas.svg";
import postgresql from "@/assets/skills/postgresql.svg";
import prisma from "@/assets/skills/prisma.svg";
import pytest from "@/assets/skills/pytest.svg";
import python from "@/assets/skills/python.svg";
import react from "@/assets/skills/react.svg";
import scikitlearn from "@/assets/skills/scikitlearn.svg";
import shadcn from "@/assets/skills/shadcnui.svg";
import sql from "@/assets/skills/sql.svg";
import sqlite from "@/assets/skills/sqlite.svg";
import statistics from "@/assets/skills/statistics.svg";
import swing from "@/assets/skills/swing.svg";
import tailwind from "@/assets/skills/tailwindcss.svg";
import typeorm from "@/assets/skills/typeorm.svg";
import typescript from "@/assets/skills/typescript.svg";
import vite from "@/assets/skills/vite.svg";

/** Tools named by a phrase rather than a brand: their name is translated. */
export type TranslatedTool = "mcp" | "agents" | "statistics";

export type Tool = { icon: string } & (
  { name: string } | { nameKey: TranslatedTool }
);

/** Copy key of each main-stack tool's one-line description. */
export type MainId =
  | "python"
  | "typescript"
  | "nestjs"
  | "react"
  | "nextjs"
  | "postgresql"
  | "docker"
  | "githubactions";

export const MAIN_STACK: readonly { id: MainId; name: string; icon: string }[] =
  [
    { id: "python", name: "Python", icon: python },
    { id: "typescript", name: "TypeScript", icon: typescript },
    { id: "nestjs", name: "NestJS", icon: nestjs },
    { id: "react", name: "React", icon: react },
    { id: "nextjs", name: "Next.js", icon: nextjs },
    { id: "postgresql", name: "PostgreSQL", icon: postgresql },
    { id: "docker", name: "Docker", icon: docker },
    { id: "githubactions", name: "GitHub Actions", icon: githubactions },
  ];

export type ToolboxCategory =
  "languages" | "backend" | "frontend" | "databases" | "infra" | "ai";

/** Everything outside the main stack, grouped by what it's for. */
export const TOOLBOX: Readonly<Record<ToolboxCategory, readonly Tool[]>> = {
  languages: [
    { name: "Bash", icon: gnubash },
    { name: "JavaScript", icon: javascript },
    { name: "SQL", icon: sql },
    { name: "Java", icon: openjdk },
    { name: "C / C++", icon: cplusplus },
  ],
  backend: [
    { name: "Express", icon: express },
    { name: "Flask", icon: flask },
    { name: "Prisma", icon: prisma },
    { name: "TypeORM", icon: typeorm },
    { name: "REST & JWT", icon: jsonwebtokens },
  ],
  frontend: [
    { name: "Vite", icon: vite },
    { name: "Tailwind CSS", icon: tailwind },
    { name: "shadcn/ui", icon: shadcn },
    { name: "Leaflet", icon: leaflet },
    { name: "Java Swing", icon: swing },
  ],
  databases: [
    { name: "MySQL", icon: mysql },
    { name: "SQLite", icon: sqlite },
  ],
  infra: [
    { name: "Linux", icon: linux },
    { name: "Git", icon: git },
    { name: "AWS", icon: aws },
    { name: "Caddy", icon: caddy },
  ],
  ai: [
    { name: "pytest", icon: pytest },
    { name: "JSON Schema", icon: json },
    { nameKey: "mcp", icon: mcp },
    { nameKey: "agents", icon: agents },
  ],
};

/** Tools I'm learning now, during my MSc. */
export const EXPLORING: readonly Tool[] = [
  { name: "pandas", icon: pandas },
  { name: "NumPy", icon: numpy },
  { name: "scikit-learn", icon: scikitlearn },
  { nameKey: "statistics", icon: statistics },
];

/** Returns the display name of a tool, translating the ones named by a phrase. */
export function useToolName() {
  const { t } = useTranslation();
  return (tool: Tool) =>
    "name" in tool ? tool.name : t(`_pages:skills.tools.${tool.nameKey}`);
}
