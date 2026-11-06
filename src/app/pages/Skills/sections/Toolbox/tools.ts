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

/** How often I reach for a tool; drives the tile style and the legend. */
export type Tier = "daily" | "comfortable" | "learning";

/** Tools named by a phrase rather than a brand: their name is translated. */
export type TranslatedTool = "mcp" | "agents" | "statistics";

export type Tool = { icon: string; tier: Tier } & (
  { name: string } | { nameKey: TranslatedTool }
);

export type Category =
  "languages" | "backend" | "frontend" | "databases" | "infra" | "ai" | "data";

/** Logos come from Simple Icons (CC0) and, for AWS, Devicon (MIT). SQL, Java Swing, LLM agents
    and statistics are not brands, so they get drawn line icons in the accent blue. */
export const TOOLBOX: Readonly<Record<Category, readonly Tool[]>> = {
  languages: [
    { name: "Python", icon: python, tier: "daily" },
    { name: "TypeScript", icon: typescript, tier: "comfortable" },
    { name: "JavaScript", icon: javascript, tier: "comfortable" },
    { name: "SQL", icon: sql, tier: "comfortable" },
    { name: "Bash", icon: gnubash, tier: "daily" },
    { name: "Java", icon: openjdk, tier: "comfortable" },
    { name: "C / C++", icon: cplusplus, tier: "comfortable" },
  ],
  backend: [
    { name: "NestJS", icon: nestjs, tier: "comfortable" },
    { name: "Express", icon: express, tier: "comfortable" },
    { name: "Flask", icon: flask, tier: "comfortable" },
    { name: "Prisma", icon: prisma, tier: "comfortable" },
    { name: "TypeORM", icon: typeorm, tier: "comfortable" },
    { name: "REST & JWT", icon: jsonwebtokens, tier: "comfortable" },
  ],
  frontend: [
    { name: "React", icon: react, tier: "comfortable" },
    { name: "Next.js", icon: nextjs, tier: "comfortable" },
    { name: "Vite", icon: vite, tier: "comfortable" },
    { name: "Tailwind CSS", icon: tailwind, tier: "comfortable" },
    { name: "shadcn/ui", icon: shadcn, tier: "comfortable" },
    { name: "Leaflet", icon: leaflet, tier: "comfortable" },
    { name: "Java Swing", icon: swing, tier: "comfortable" },
  ],
  databases: [
    { name: "PostgreSQL", icon: postgresql, tier: "comfortable" },
    { name: "MySQL", icon: mysql, tier: "comfortable" },
    { name: "SQLite", icon: sqlite, tier: "comfortable" },
  ],
  infra: [
    { name: "Docker", icon: docker, tier: "daily" },
    { name: "Linux", icon: linux, tier: "daily" },
    { name: "GitHub Actions", icon: githubactions, tier: "daily" },
    { name: "Git", icon: git, tier: "daily" },
    { name: "AWS", icon: aws, tier: "comfortable" },
    { name: "Caddy", icon: caddy, tier: "comfortable" },
  ],
  ai: [
    { name: "pytest", icon: pytest, tier: "daily" },
    { name: "JSON Schema", icon: json, tier: "daily" },
    { nameKey: "mcp", icon: mcp, tier: "daily" },
    { nameKey: "agents", icon: agents, tier: "daily" },
  ],
  data: [
    { name: "pandas", icon: pandas, tier: "learning" },
    { name: "NumPy", icon: numpy, tier: "learning" },
    { name: "scikit-learn", icon: scikitlearn, tier: "learning" },
    { nameKey: "statistics", icon: statistics, tier: "learning" },
  ],
};
