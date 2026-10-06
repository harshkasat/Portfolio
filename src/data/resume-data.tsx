import {
  GitHubIcon,
  LinkedInIcon,
  XIcon,
  ResumeIcon,
} from "@/components/icons";
import NotionIcon from "@/components/icons/NotionIcon";
import { projects } from "./project-data";

export const RESUME_DATA = {
  name: "Harsh Kasat",
  location: "India · Remote",
  locationLink: "https://www.google.com/maps/place/Surat",
  about:
    "Infra & Backend Engineer at Freebuff (YC F24) · Sandboxes, Convex, Bun/TypeScript",
  summary: `I build the infrastructure that runs AI coding agents. At Freebuff (YC F24) I own the sandbox layer: Daytona and E2B fleets, Convex backends, runner services and the sweeps that keep thousands of workspaces healthy. Before that I was a founding engineer at vly.ai (acquired by Freebuff). I learn by shipping, and I have a habit of breaking things on purpose to see how they fail.`,
  avatarUrl: "/pfp-image.png",
  contact: {
    email: "harshkasat01@gmail.com",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/harshkasat",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/harshkasat/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/harsh__kasat",
        icon: XIcon,
      },
      {
        name: "Resume",
        url: "https://drive.google.com/file/d/1hXeKhl6NDa97uGjL6F-ZW0DyfZn69gSx/view?usp=sharing",
        icon: ResumeIcon,
      },
      {
        name: "Notion",
        url: "https://www.notion.so/Why-so-curious-1fbfcb5ecf638083bea5f99bc3d272ff",
        icon: NotionIcon,
      },
    ],
  },
  education: [
    {
      school: "Gujarat Technological University",
      degree: "Bachelor's Degree in Computer Science",
      start: "2021",
      end: "2025",
    },
  ],
  work: [
    {
      company: "Freebuff (Codebuff)",
      link: "https://freebuff.com/",
      badges: ["YC F24", "Remote (SF)"],
      title: "Software Engineer — Infrastructure",
      start: "June 2026",
      end: null,
      description: `Design and run the sandbox layer that executes AI coding agents for thousands of user projects, on Convex + Bun/TypeScript.
      Multi-provider sandbox architecture: one SandboxProvider interface over Daytona and E2B, with golden templates, a warm pool for instant project start, and automatic failover (e.g. new projects route to E2B when Daytona's org disk cap fills).
      Lifecycle sweeps that scale: an idle-park sweeper that reconciles against the provider's own running list instead of our rows, parks newest-first, and skips sandboxes a client just woke — fixing a starvation bug that had silently parked nothing for weeks.
      Fleet-wide job runner: a queue-claim service with jittered claims so hundreds of runners stop racing for the same run, and timeout sweeps that finalize one stuck message per transaction so a bad row can't block the batch.
      Memory-safe static deploys: moved archive packing from a 512 MB Convex action into the sandbox itself (find | tar | gzip), added size guards and a settings-based rollback switch.
      Security by default: made Convex functions internal unless explicitly exposed, moved the admin-key hand-out behind a session-gated route, and added a CI gate that fails the build when the public surface grows.`,
    },
    {
      company: "vly.ai",
      link: "https://www.linkedin.com/company/vly-ai/",
      badges: ["YC F24", "Acquired by Freebuff"],
      title: "Founding Engineer",
      start: "October 2025",
      end: "May 2026",
      description: `Early engineer on an AI app builder: owned backend services, hosting infrastructure and the agent runtime.
      Screenshot service built for throughput: BullMQ queue in front of a Puppeteer browser pool with a mutex per browser, per-project+URL throttling, stalled-job detection, 3-attempt retry with 24h re-queue, and idle auto-shutdown so the fleet costs nothing when quiet.
      Hosting migration: moved user-project static hosting from Freestyle to Vercel with project reuse on redeploy, and cut Convex usage along the way.
      Usage metering: moved Convex usage metering into Redis and built the platform-usage dashboard with per-model and per-user agent-run breakdowns for billing and abuse detection.
      Agent runtime: a unified auth flow for Claude Code inside the sandbox (OAuth setup-token over PTY, token passed per run as env), project-level permission toggles, and GitHub repo linking that keeps the VM remote in sync.
      Containers that actually run Chromium: debugged crashpad / posix_spawn EAGAIN failures in Docker and standardized the image on node-slim.`,
    },
    {
      company: "Kliqstr",
      link: "https://kliqstr.com/",
      badges: ["Remote (USA)"],
      title: "Gen AI Developer (Freelance)",
      start: "February 2024",
      end: "May 2025",
      description: `Built AI agents for customer support and lead generation with LangChain + Superagent, served from a FastAPI backend.
      Created a voice modulator that clones a user's tone for video replies.
      Automated daily Facebook content across 30+ pages with Redis-backed pipelines, cutting manual work by ~90%.`,
    },
    {
      company: "Occultdiy",
      link: "https://www.occultdiy.com/",
      badges: ["Remote (London)"],
      title: "Django Developer (Contract)",
      start: "September 2023",
      end: "February 2024",
      description: `Rebuilt the core web app frontend for faster loads and a smoother UX.
      Set up CI/CD with GitHub Actions + Docker for zero-downtime deploys.
      Migrated the backend from SQLite to Supabase (about 3x faster queries) and ran targeted email campaigns to 15k+ users.`,
    },
    {
      company: "AMD Telecom S.A.",
      link: "https://presentations.amdtelecom.net/",
      badges: ["Remote (Greece)"],
      title: "Software Engineer",
      start: "March 2023",
      end: "June 2024",
      description: `Designed and deployed 10+ microservices for Gen AI workloads with Docker + Redis.
      Fine-tuned invoice parsers that turn scanned invoices into structured JSON at ~95% accuracy.
      Integrated NVIDIA RIVA for real-time call transcription and synthesis; built Stable Diffusion + ControlNet tooling for marketing images.`,
    },
    {
      company: "SymPy (open source)",
      link: "https://github.com/sympy/sympy/pulls?q=is%3Apr+author%3Aharshkasat+is%3Amerged",
      badges: ["Open Source"],
      title: "Contributor",
      start: "November 2023",
      end: "January 2024",
      description: `Contributed to SymPy's core and mechanics modules: a trigonometric rewrite rule for Bessel J, the orient_dcm / orient_explicit API in the mechanics reference-frame code, and correctness fixes to Mod, ceiling and expression printing.`,
    },
  ],
  skills: [
    { category: "Languages", items: ["TypeScript", "Python", "Go"] },
    {
      category: "Runtime & Backend",
      items: ["Bun", "Node.js", "Convex", "FastAPI", "Django"],
    },
    {
      category: "Sandboxes & Agents",
      items: ["Daytona", "E2B", "Claude Code", "Codex", "MCP"],
    },
    {
      category: "Queues & Jobs",
      items: ["BullMQ", "Redis", "cron sweeps", "runner services"],
    },
    {
      category: "Infra",
      items: ["Docker", "Render", "Vercel", "AWS", "GitHub Actions"],
    },
    { category: "Data", items: ["PostgreSQL", "Supabase", "Redis", "Firebase"] },
    {
      category: "Frontend",
      items: ["React", "Next.js", "Tailwind", "Electron"],
    },
    {
      category: "AI/ML",
      items: ["PyTorch", "HuggingFace", "LangChain", "Stable Diffusion", "OpenCV"],
    },
    {
      category: "Vector DBs",
      items: ["Pinecone", "Qdrant", "FAISS", "ChromaDB"],
    },
    { category: "Observability", items: ["ELK", "PostHog", "Sentry"] },
  ],
  projects: projects,
} as const;
