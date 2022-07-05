<template>
  <a class="mail-prompt" href="mailto:nik@7aske.com">
    <span class="user-host-prompt">&nbsp;nik@7aske.com </span><span class="arrow"/>
    <span class="dir"> ~ </span><span class="arrow"/></a>
  <span class="command">
    &nbsp;<slot/><br/>
  </span>
</template>

<style scoped lang="scss">
.command {
  color: rgb(var(--v-theme-success));
}
.arrow {
  color: rgb(var(--v-theme-background));
  background-color: rgb(var(--v-theme-nord8));

  &::after {
    content: '';
  }
}

.user-host-prompt {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  background-color: rgb(var(--v-theme-background));
}

.dir {
  background-color: rgb(var(--v-theme-nord8));

  & + .arrow {
    background-color: transparent;

    &:after {
      color: rgb(var(--v-theme-nord8));
    }
  }
}

.mail-prompt {
  color: rgb(var(--v-theme-text));
  border: none;

  &:hover {
    background-color: rgb(var(--v-theme-primary)) !important;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;

    span {
      background-color: rgb(var(--v-theme-nord13));
      color: rgb(var(--v-theme-nord0));
    }

    & > .arrow::after {
      color: rgb(var(--v-theme-nord13));
      background-color: rgb(var(--v-theme-nord15));
    }

    .dir {
      background-color: rgb(var(--v-theme-nord15));

      & + .arrow {
        &:after {
          color: rgb(var(--v-theme-nord15));
          background-color: rgb(var(--v-theme-surface));
        }
      }
    }
  }
}

</style>
