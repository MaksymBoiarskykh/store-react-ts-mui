import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { FC, useState } from "react";
import { Box, Rating, Slider, Typography } from "@mui/material";

const categories: string[] = [
  "all",
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

interface ISidebar {
  addCategory: (value: string) => void;
  setRating: (rating: number | null) => void;
  handleChange: (value: number | number[]) => void;
  rating: number | null;
  priceRange: number[];
}

export const Sidebar: FC<ISidebar> = ({
  addCategory,
  setRating,
  handleChange,
  priceRange,
  rating,
}) => {
  return (
    <form style={{ maxWidth: "250px" }}>
      <FormControl>
        <FormLabel>Category</FormLabel>
        <RadioGroup
          defaultValue="all"
          onChange={(e) => addCategory(e.target.value)}
        >
          {categories.map((category) => (
            <FormControlLabel
              key={category}
              value={category}
              control={<Radio />}
              label={category}
            />
          ))}
        </RadioGroup>
      </FormControl>
      <FormControl sx={{ mt: 3 }}>
        <Typography component="legend">Rating</Typography>
        <Rating
          value={rating}
          onChange={(_, newValue) => {
            setRating(newValue);
          }}
        />
      </FormControl>
      <FormControl sx={{ width: "90%", mt: 3 }}>
        <Typography component="legend">Price Range</Typography>
        <Slider
          getAriaLabel={() => "Temperature range"}
          max={1000}
          min={0}
          valueLabelDisplay="auto"
          value={priceRange}
          onChange={(_, newValue) => handleChange(newValue)}
        />
      </FormControl>
    </form>
  );
};
