import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { FC } from "react";
import { Box, Rating, Typography } from "@mui/material";

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
  rating: number | null;
}

export const Sidebar: FC<ISidebar> = ({ addCategory, setRating, rating }) => {
  return (
    <form>
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
      <Box sx={{ mt: 5 }}>
        <Typography component="legend">Rating</Typography>
        <Rating
          name="simple-controlled"
          value={rating}
          onChange={(_, newValue) => {
            setRating(newValue);
          }}
        />
      </Box>
    </form>
  );
};
