<template>
  <div>
    <Head>
      <Title>Projects</Title>
    </Head>
    <terminal>
      <prompt>cat ~/projects</prompt>
      <project-link v-for="proj in projs" :project="proj"/>
      <prompt/>
    </terminal>
  </div>

</template>

<script setup lang="ts">

import Project from "~/common/Project";

const projs: Project[] = [
  {
    name: "lang",
    href: "https://github.com/7aske/lang",
    technologies: ["C", "x86 Assembly"],
    description: "A programming language written in C",
  },
  {
    name: "frigo",
    technologies: ["Spring Boot", "MariaDB", "Flyway", "Angular"],
    href: "https://frigonekretnine.com",
    description: "Real-estate agency web system",
  },
  {
    name: "zen",
    technologies: ["Spring Boot", "Thymeleaf", "JSP", "JUnit5", "MariaDB", "Flyway", "React"],
    href: "https://zenmasaza.com",
    description: "Website with a webshop and blog",
  },
  {
    name: "springstrap",
    technologies: ["TypeScript"],
    href: "https://github.com/7aske/springstrap",
    description: "Spring project code generator",
  },
  {
    name: "grain",
    technologies: ["Java", "JUnit5"],
    href: "https://github.com/7aske/grain",
    description: "Zero dependency web framework",
  },
  {
    name: "rgs",
    technologies: ["Rust", "libgit2"],
    href: "https://github.com/7aske/rgs",
    description: "Batch git status checking tool",
  },
  {
    name: "rzp-blog",
    technologies: ["Spring Boot", "MariaDB", "React", "JUnit5", "Testcontainers"],
    href: "https://blog.rzp.7aske.xyz",
    description: "A generic blog project",
  },
  {
    name: "xinp",
    technologies: ["C", "Xlib"],
    href: "https://github.com/7aske/xinp",
    description: "i3input replacement with Xresources support",
  },
  {
    name: "agame",
    technologies: ["C", "SDL2"],
    href: "https://github.com/7aske/agame",
    description: "Game from scratch in C",
  },
];
</script>
