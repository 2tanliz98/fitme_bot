import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";


const Header: React.FC= () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        color="primary"
        sx={{
          transition: "transform 0.3s ease-in-out",
          transform: isScrolled ? "translateY(-100%)" : "translateY(0)",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: "center" }}
          >
            FitMe
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
