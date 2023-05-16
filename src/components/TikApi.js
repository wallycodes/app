import * as React from "react";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";

function TikApi() {
  return (
    <div>
      <Container
        align="center"
        maxWidth={false}
        fullWidth
        disableGutters
        sx={{ height: "100vh", backgroundColor: "#fff", mb: 10 }}
      >
        <Typography
          fullWidth
          id="fullWidth"
          sx={{
            py: 10,
            backgroundColor: "#fff",
            fontSize: {
              xs: "1.5rem",
              sm: "1.5rem",
              md: "2rem",
              lg: "2rem",
              xl: "2rem",
            },
          }}
        >
          Event Videos
        </Typography>

        <Box sx={{ pb: 15, mx: 4 }}>
          <iframe
            className="youtube-video"
            src="https://www.youtube.com/embed/AsN5fdngBCk"
            title="LSDREAM - LOST LANDS 2022 (FULL SET)"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>

          <iframe
            className="youtube-video"
            src="https://www.youtube.com/embed/Kf4vuurAZeI"
            title="Excision B2B Sullivan King Live @ Lost Lands 2022 - Full Set"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>

          <iframe
            className="youtube-video"
            src="https://www.youtube.com/embed/FN0PD6YQVks"
            title="Excision 2 Hour Set Live @ Lost Lands 2022 - Full Set"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <iframe
            className="youtube-video"
            src="https://www.youtube.com/embed/IWreyRnkCJk"
            title="SUBTRONICS LIVE @ ULTRA MUSIC FESTIVAL MIAMI 2023"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <iframe
            className="youtube-video"
            src="https://www.youtube.com/embed/-tLRvxTJctI"
            title="SPACE LACES PRESENTS VAULTAGE // Live from Mission Ballroom"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <iframe
            className="youtube-video"
            src="https://www.youtube.com/embed/dFfC92iBxNw"
            title="Four Tet x Fred again.. x Skrillex - Coachella 2023 - FULL SET **OFFICIAL**"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <iframe
            className="youtube-video"
            src="https://www.youtube.com/embed/OvNkaFHSAXY"
            title="Arctic Monkeys - When The Sun Goes Down / Brianstorm"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <iframe
            className="youtube-video"
            src="https://www.youtube.com/embed/QYatCsZALNM"
            title="Eliminate Live @ Lost Lands 2022 - Full Set"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <iframe
            className="youtube-video"
            src="https://www.youtube.com/embed/vTJDRgBHDvA"
            title="Knife Party Live @ Lost Lands 2022 - Full Set"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <iframe
            className="youtube-video"
            src="https://www.youtube.com/embed/u1PTUHb2anY"
            title="VIRTUAL RIOT @ LOST LANDS 2022"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </Box>
      </Container>
    </div>
  );
}

export default TikApi;
