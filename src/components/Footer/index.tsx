import React from "react";
import classes from "./Footer.module.scss";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaVk,
} from "react-icons/fa";
import { SocialLinks } from "../../constants";

const Footer: React.FC = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.main}>
        <section className={classes.socials}>
          <h3>stay connected</h3>
          <div>
            <a href={SocialLinks.facebook} target="_blank">
              <FaFacebookF />
            </a>
            <a href={SocialLinks.twitter} target="_blank">
              <FaTwitter />
            </a>
            <a href={SocialLinks.pinterest} target="_blank">
              <FaPinterest />
            </a>
            <a href={SocialLinks.instagram} target="_blank">
              <FaInstagram />
            </a>
            <a href={SocialLinks.vk} target="_blank">
              <FaVk />
            </a>
          </div>
        </section>
        <section className={classes.subscribe}>
          <h3>be our friend</h3>
          <div>
            <input type="email" placeholder="Enter your email here" />
            <button>Subscribe Now</button>
          </div>
        </section>
        <section className={classes.connect}>
          <h3>need assistance?</h3>
          <div>
            <a href="tel: 1234567890">123-456-7890</a>
            <a href="mailto: info@styled.com">info@styled.com</a>
          </div>
        </section>
      </div>
      <p className={classes.bottom}>
        © 2023 by STYLED. Powered and secured by{" "}
        <a href="https://ericyakubu.com" target="_blank">
          Eric Yakubu
        </a>
      </p>
    </footer>
  );
};

export default Footer;
