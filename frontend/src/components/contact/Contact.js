import React from "react";

import { CONTACT_OPTIONS, CONTACT_TITLE } from "@shared/Constants";
import { CardActionArea } from "@mui/material/";

import { MenuCardMedia, PageTitle } from "@shared/styles/StyledMaterialUI";
import { ContactCard } from "./components/ContactCard";
import { ContactGrid } from "./components/ContactGrid";

export default function Contact() {
  return (
    <ContactGrid container >
      <PageTitle>{CONTACT_TITLE}</PageTitle>
      < ContactGrid container >
        {
          CONTACT_OPTIONS.map((item, index) => (
            < ContactCard key={index + item.imageTitle}>
              <CardActionArea href={item.href}>
                <MenuCardMedia
                  component="img"
                  image={require(`@shared/images/${item.imageTitle}`)}
                />
              </CardActionArea>
            </ContactCard >
          ))
        }
      </ContactGrid >
    </ContactGrid>
  );
}