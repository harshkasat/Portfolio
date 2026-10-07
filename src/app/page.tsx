"use client";
import Image from "next/image";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { ModeToggle } from "@/components/ModeToggle";
import { GitHubActivity } from "@/components/ui/github-activity";

export default function Page() {
  return (
    <>
      <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
        {/* <BackgroundLines> */}
        <section className="mx-auto w-full max-w-4xl space-y-8 print:space-y-4">
          <div className="flex flex-col gap-x-1 text-sm text-muted-foreground print:flex print:text-[12px]">
            <ModeToggle />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex-1 space-y-1.5">
              <h1 className="text-2xl font-bold text-foreground">
                {RESUME_DATA.name}
              </h1>
              <p className="max-w-md text-pretty text-sm text-muted-foreground print:text-[12px]">
                {RESUME_DATA.about}
              </p>
              <p className="max-w-md items-center text-pretty text-xs text-muted-foreground">
                <a
                  className="inline-flex gap-x-1.5 align-baseline leading-none"
                  href={RESUME_DATA.locationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Location: ${RESUME_DATA.location}`}
                >
                  <GlobeIcon className="size-3" aria-hidden="true" />
                  {RESUME_DATA.location}
                </a>
              </p>
              <div className="flex gap-x-1 pt-1 text-sm text-muted-foreground print:hidden">
                {RESUME_DATA.contact.email ? (
                  <Button
                    className="size-8"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a
                      href={`mailto:${RESUME_DATA.contact.email}`}
                      aria-label={`Email ${RESUME_DATA.name}`}
                    >
                      <MailIcon className="size-4" aria-hidden="true" />
                    </a>
                  </Button>
                ) : null}
                {RESUME_DATA.contact.social.map((social) => (
                  <Button
                    key={social.name}
                    className="size-8"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name === "Resume" ? `CV — ${RESUME_DATA.name}'s resume` : `${RESUME_DATA.name} on ${social.name}`}
                    >
                      <social.icon className="size-4" aria-hidden="true" />
                    </a>
                  </Button>
                ))}
              </div>
              <div className="hidden flex-col gap-x-1 text-sm text-muted-foreground print:flex print:text-[12px]">
                {RESUME_DATA.contact.email ? (
                  <a href={`mailto:${RESUME_DATA.contact.email}`}>
                    <span className="underline">
                      {RESUME_DATA.contact.email}
                    </span>
                  </a>
                ) : null}
              </div>
            </div>

            <Image
              src={RESUME_DATA.avatarUrl}
              alt={`Portrait of ${RESUME_DATA.name}`}
              width={112}
              height={112}
              priority
              sizes="112px"
              className="size-28 shrink-0 rounded-xl object-cover"
            />
          </div>
          <Section>
            <h2 className="text-xl font-bold text-foreground">About</h2>
            <p className="text-pretty text-sm text-muted-foreground print:text-[12px]">
              {RESUME_DATA.summary}
            </p>
          </Section>
          <Section>
            <h2 className="text-xl font-bold text-foreground">
              Work Experience
            </h2>
            {RESUME_DATA.work.map((work) => (
              <Card
                key={work.company}
                className="bg-transparent mb-6 shadow-none border-none"
              >
                <CardHeader className="pb-2">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-y-2 gap-x-2 text-base">
                    <div className="flex flex-col gap-y-1">
                      <h3 className="flex flex-wrap items-center gap-x-2 gap-y-1 font-semibold leading-none">
                        <a
                          className="hover:text-primary"
                          href={work.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {work.company}
                        </a>
                        <span className="inline-flex flex-wrap gap-1">
                          {work.badges.map((badge) => (
                            <Badge
                              variant="secondary"
                              className="align-middle text-xs print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
                              key={badge}
                            >
                              {badge}
                            </Badge>
                          ))}
                        </span>
                      </h3>
                      <h4 className="font-mono text-sm leading-none text-muted-foreground print:text-[12px]">
                        {work.title}
                      </h4>
                    </div>
                    <div className="text-sm tabular-nums text-muted-foreground text-right min-w-[180px]">
                      {work.start} - {work.end ?? "Present"}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="mt-2 bg-transparent text-muted-foreground print:text-[10px]">
                  <p className="whitespace-pre-line leading-relaxed text-[15px]">{work.description}</p>
                </CardContent>
              </Card>
            ))}
          </Section>
          <Section>
            <h2 className="text-xl font-bold text-foreground">
              Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {RESUME_DATA.skills.map((group) => (
                <Badge
                  key={group.category}
                  variant="secondary"
                  className="max-w-full whitespace-normal rounded-xl px-3 py-1.5 text-sm font-medium leading-snug hover:bg-primary hover:text-primary-foreground print:text-[10px]"
                >
                  <span className="font-semibold">{group.category}:</span>
                  &nbsp;{group.items.join(", ")}
                </Badge>
              ))}
            </div>
          </Section>
          <Section className="print:hidden">
            <h2 className="text-xl font-bold">GitHub Activity</h2>
            <GitHubActivity
              username="harshkasat"
              variant="white"
              months={12}
              showMonths
              className="w-full"
            />
          </Section>
        </section>
      </main>
    </>
  );
}
