import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import ChipContainer from "@/components/ui/chip-container";
import { ProjectInterface } from "@/config/projects";

interface ProjectCardProps {
  project: ProjectInterface;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="relative p-6 max-w-sm bg-background border border-border rounded-lg">
      <div className="relative w-full h-[200px]">
  {project.websiteLink ? (
    <Link
      href={project.websiteLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        className="rounded-lg border border-border object-cover"
        src={project.companyLogoImg}
        alt={`${project.companyName} logo`}
        fill
      />
    </Link>
  ) : (
    <Image
      className="rounded-lg border border-border object-cover"
      src={project.companyLogoImg}
      alt={`${project.companyName} logo`}
      fill
    />
  )}
</div>

      <div className="pt-5 space-y-3">
        <h5 className="text-2xl font-bold tracking-tight text-foreground">
          {project.companyName}
        </h5>
        <p className="line-clamp-3 font-normal text-muted-foreground">
          {project.shortDescription}
        </p>
        <div className="flex gap-2 flex-wrap">
          <ChipContainer textArr={project.category} />
        </div>
      </div>
    </div>
  );
}
