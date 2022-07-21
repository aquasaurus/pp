import { defineStore } from "pinia";

export const useModalConfig = defineStore("loginModals", {
  state() {
    return {
      loginModalIsOpen: false,
      signupModalIsOpen: false,
      loggedIn: false,
      username: "",
    };
  },
  actions: {
    login(name: string) {
      this.loggedIn = true;
      this.username = name;
    },
    logout() {
      this.loggedIn = false;
    },
    openLogin() {
      this.loginModalIsOpen = true;
    },
    openSignup() {
      this.signupModalIsOpen = true;
    },
    closeLogin() {
      this.loginModalIsOpen = false;
    },
    closeSignup() {
      this.signupModalIsOpen = false;
    },
  },
});