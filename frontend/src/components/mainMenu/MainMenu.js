import * as React from "react";

import { CardActionArea, CardContent } from "@mui/material/";

import { MenuCardMedia } from "@shared/styles/StyledMaterialUI";
import { MENU_ITEMS } from "@shared/Constants";
import { MainMenuCard } from "./components/MainMenuCard";
import { MainMenuDescription } from "./components/MainMenuDescription";
import { MainMenuGrid } from "./components/MainMenuGrid";
import { MainMenuTitle } from "./components/MainMenuTitle";

export default function MainMenu() {
  return (
    <MainMenuGrid container
    >
      {MENU_ITEMS.map((item, index) => (
        < MainMenuCard key={index}>
          <CardActionArea href={item.href}>
            <MenuCardMedia
              component="img"
              image={require(`@shared/images/${item.imageTitle}`)}
            />
            <CardContent>
              <MainMenuTitle >
                {item.mainTitle}
              </MainMenuTitle>
              <MainMenuDescription >
                {item.description}
              </MainMenuDescription>
            </CardContent>
          </CardActionArea>
        </MainMenuCard >
      ))}
    </MainMenuGrid>
  )
}
