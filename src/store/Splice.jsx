import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "What is a CVT Transmission? How It Works – Pros and Cons",
    images: [
      "https://picsum.photos/id/42/425/255",
      "https://picsum.photos/id/41/425/255",
      "https://picsum.photos/id/43/425/255",
    ],
    month: "May",
    discount: 23.2,
    discount_active: true,
    day: 1,
    year: 2023,
    comments_count: 10,
    desc_one: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
    desc_two: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
    tags: [
      {
        tagsId: 1,
        name: "alignment",
      },
    ],
    categor: "Store",
  },
  {
    id: 2,
    title: "Car Tune Up: Warning Signs & Complete Checklist",
    images: [
      "https://picsum.photos/id/412/425/255",
      "https://picsum.photos/id/411/425/255",
      "https://picsum.photos/id/413/425/255",
    ],
    month: "April",
    discount: 23.2,
    discount_active: false,
    day: 2,
    year: 2023,
    comments_count: 10,
    desc_one: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
    desc_two: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
    tags: [
      {
        tagsId: 1,
        name: "rotation",
      },
      {
        tagsId: 2,
        name: "electronic",
      },
    ],
    categor: "Repair",
  },
  {
    id: 3,
    title: "Signs Your Car Battery Has To Be Replaced",
    images: [
      "https://picsum.photos/id/142/425/255",
      "https://picsum.photos/id/141/425/255",
      "https://picsum.photos/id/143/425/255",
    ],
    month: "May",
    discount: 23.2,
    discount_active: true,
    day: 3,
    year: 2023,
    comments_count: 10,
    desc_one: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
    desc_two: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
    tags: [
      {
        tagsId: 1,
        name: "speed",
      },
      {
        tagsId: 2,
        name: "electronic",
      },
    ],
    categor: "Tuning",
  },
  {
    id: 4,
    title: "What is a CVT Transmission? How It Works – Pros and Cons",
    images: [
      "https://picsum.photos/id/42/425/255",
      "https://picsum.photos/id/41/425/255",
      "https://picsum.photos/id/43/425/255",
    ],
    month: "April",
    discount: 23.2,
    discount_active: true,
    day: 4,
    year: 2023,
    comments_count: 10,
    desc_one: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
    desc_two: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
    tags: [
      {
        tagsId: 1,
        name: "tire",
      },
      {
        tagsId: 2,
        name: "cleaning",
      },
    ],
    categor: "Sport Cars",
  },
  {
    id: 5,
    title: "Car Tune Up: Warning Signs & Complete Checklist",
    images: [
      "https://picsum.photos/id/412/425/255",
      "https://picsum.photos/id/411/425/255",
      "https://picsum.photos/id/413/425/255",
    ],
    month: "March",
    discount: 23.2,
    discount_active: false,
    day: 5,
    year: 2023,
    comments_count: 10,
    desc_one: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
    desc_two: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
    tags: [
      {
        tagsId: 1,
        name: "tire",
      },
    ],
    categor: "Technology",
  },
  {
    id: 6,
    title: "Signs Your Car Battery Has To Be Replaced",
    images: [
      "https://picsum.photos/id/142/425/255",
      "https://picsum.photos/id/141/425/255",
      "https://picsum.photos/id/143/425/255",
    ],
    month: "March",
    discount: 23.2,
    discount_active: true,
    day: 6,
    year: 2023,
    comments_count: 10,
    desc_one: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
    desc_two: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
    tags: [
      {
        tagsId: 2,
        name: "repair",
      },
    ],
    categor: "Store",
  },
  {
    id: 7,
    title: "What is a CVT Transmission? How It Works – Pros and Cons",
    images: [
      "https://picsum.photos/id/42/425/255",
      "https://picsum.photos/id/41/425/255",
      "https://picsum.photos/id/43/425/255",
    ],
    month: "April",
    discount: 23.2,
    discount_active: false,
    day: 7,
    year: 2023,
    comments_count: 10,
    desc_one: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
    desc_two: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
    tags: [
      {
        tagsId: 1,
        name: "tire",
      },
      {
        tagsId: 2,
        name: "rotation",
      },
    ],
    categor: "Repair",
  },
  {
    id: 8,
    title: "Car Tune Up: Warning Signs & Complete Checklist",
    images: [
      "https://picsum.photos/id/412/425/255",
      "https://picsum.photos/id/411/425/255",
      "https://picsum.photos/id/413/425/255",
    ],
    month: "May",
    discount: 23.2,
    discount_active: true,
    day: 8,
    year: 2023,
    comments_count: 10,
    desc_one: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
    desc_two: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
    tags: [
      {
        tagsId: 1,
        name: "alignment",
      },
      {
        tagsId: 2,
        name: "tehnology",
      },
    ],
    categor: "Store",
  },
  {
    id: 9,
    title: "What is a CVT Transmission? How It Works – Pros and Cons",
    images: [
      "https://picsum.photos/id/42/425/255",
      "https://picsum.photos/id/41/425/255",
      "https://picsum.photos/id/43/425/255",
    ],
    month: "April",
    discount: 23.2,
    discount_active: false,
    day: 9,
    year: 2023,
    comments_count: 10,
    desc_one: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
    desc_two: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
    tags: [
      {
        tagsId: 1,
        name: "speed",
      },
      {
        tagsId: 2,
        name: "tire",
      },
    ],
    categor: "Store",
  },
  {
    id: 10,
    title: "Car Tune Up: Warning Signs & Complete Checklist",
    images: [
      "https://picsum.photos/id/412/425/255",
      "https://picsum.photos/id/411/425/255",
      "https://picsum.photos/id/413/425/255",
    ],
    month: "March",
    discount: 23.2,
    discount_active: true,
    day: 10,
    year: 2023,
    comments_count: 10,
    desc_one: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
    desc_two: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
    tags: [
      {
        tagsId: 1,
        name: "servicing",
      },
    ],
    categor: "Repair",
  },
  {
    id: 11,
    title: "Signs Your Car Battery Has To Be Replaced",
    images: [
      "https://picsum.photos/id/142/425/255",
      "https://picsum.photos/id/141/425/255",
      "https://picsum.photos/id/143/425/255",
    ],
    month: "May",
    discount: 23.2,
    discount_active: true,
    day: 11,
    year: 2023,
    comments_count: 10,
    desc_one: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
    desc_two: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
    tags: [
      {
        tagsId: 1,
        name: "servicing",
      },
    ],
    categor: "Technology",
  },
  {
    id: 12,
    title: "What is a CVT Transmission? How It Works – Pros and Cons",
    images: [
      "https://picsum.photos/id/42/425/255",
      "https://picsum.photos/id/41/425/255",
      "https://picsum.photos/id/43/425/255",
    ],
    month: "March",
    discount: 23.2,
    discount_active: false,
    day: 12,
    year: 2023,
    comments_count: 10,
    desc_one: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
    desc_two: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
    tags: [
      {
        tagsId: 1,
        name: "tehnology",
      },
      {
        tagsId: 2,
        name: "tire",
      },
    ],
    categor: "Sport Cars",
  },
  {
    id: 13,
    title: "Car Tune Up: Warning Signs & Complete Checklist",
    images: [
      "https://picsum.photos/id/412/425/255",
      "https://picsum.photos/id/411/425/255",
      "https://picsum.photos/id/413/425/255",
    ],
    month: "April",
    discount: 23.2,
    discount_active: true,
    day: 13,
    year: 2023,
    comments_count: 10,
    desc_one: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
    desc_two: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
    tags: [
      {
        tagsId: 1,
        name: "alignment",
      },
      {
        tagsId: 2,
        name: "repair",
      },
    ],
    categor: "Tuning",
  },
  {
    id: 14,
    title: "Signs Your Car Battery Has To Be Replaced",
    images: [
      "https://picsum.photos/id/142/425/255",
      "https://picsum.photos/id/141/425/255",
      "https://picsum.photos/id/143/425/255",
    ],
    month: "May",
    discount: 23.2,
    discount_active: false,
    day: 14,
    year: 2023,
    comments_count: 10,
    desc_one: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
    desc_two: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
    tags: [
      {
        tagsId: 1,
        name: "servicing",
      },
      {
        tagsId: 2,
        name: "electronic",
      },
    ],
    categor: "Store",
  },
  {
    id: 15,
    title: "What is a CVT Transmission? How It Works – Pros and Cons",
    images: [
      "https://picsum.photos/id/42/425/255",
      "https://picsum.photos/id/41/425/255",
      "https://picsum.photos/id/43/425/255",
    ],
    month: "May",
    discount: 23.2,
    discount_active: true,
    day: 15,
    year: 2023,
    comments_count: 10,
    desc_one: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
    desc_two: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
    tags: [
      {
        tagsId: 1,
        name: "tire",
      },
      {
        tagsId: 2,
        name: "electronic",
      },
    ],
    categor: "Store",
  },
  {
    id: 16,
    title: "Car Tune Up: Warning Signs & Complete Checklist",
    images: [
      "https://picsum.photos/id/412/425/255",
      "https://picsum.photos/id/411/425/255",
      "https://picsum.photos/id/413/425/255",
    ],
    month: "March",
    discount: 23.2,
    discount_active: false,
    day: 16,
    year: 2023,
    comments_count: 10,
    desc_one: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
    desc_two: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
    tags: [
      {
        tagsId: 1,
        name: "cleaning",
      },
    ],
    categor: "Store",
  },
  {
    id: 17,
    title: "What is a CVT Transmission? How It Works – Pros and Cons",
    images: [
      "https://picsum.photos/id/42/425/255",
      "https://picsum.photos/id/41/425/255",
      "https://picsum.photos/id/43/425/255",
    ],
    month: "May",
    discount: 23.2,
    discount_active: true,
    day: 17,
    year: 2023,
    comments_count: 10,
    desc_one: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
    desc_two: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
    tags: [
      {
        tagsId: 1,
        name: "tehnology",
      },
    ],
    categor: "Repair",
  },
  {
    id: 18,
    title: "Signs Your Car Battery Has To Be Replaced",
    images: [
      "https://picsum.photos/id/142/425/255",
      "https://picsum.photos/id/141/425/255",
      "https://picsum.photos/id/143/425/255",
    ],
    month: "May",
    discount: 23.2,
    discount_active: true,
    day: 18,
    year: 2023,
    comments_count: 10,
    desc_one: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
    desc_two: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
    tags: [
      {
        tagsId: 1,
        name: "electronic",
      },
    ],
    categor: "Store",
  },
  {
    id: 19,
    title: "What is a CVT Transmission? How It Works – Pros and Cons",
    images: [
      "https://picsum.photos/id/42/425/255",
      "https://picsum.photos/id/41/425/255",
      "https://picsum.photos/id/43/425/255",
    ],
    month: "May",
    discount: 23.2,
    discount_active: true,
    day: 19,
    year: 2023,
    comments_count: 10,
    desc_one: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
    desc_two: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
    tags: [
      {
        tagsId: 1,
        name: "alignment",
      },
      {
        tagsId: 2,
        name: "rotation",
      },
    ],
    categor: "Sport Cars",
  },
  {
    id: 20,
    title: "What is a CVT Transmission? How It Works – Pros and Cons",
    images: [
      "https://picsum.photos/id/42/425/255",
      "https://picsum.photos/id/41/425/255",
      "https://picsum.photos/id/43/425/255",
    ],
    month: "March",
    discount: 23.2,
    discount_active: false,
    day: 20,
    year: 2023,
    comments_count: 10,
    desc_one: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
    desc_two: "Aliquam sem et tortor consequa iquam sem et tortor consequat…",
    tags: [
      {
        tagsId: 1,
        name: "speed",
      },
    ],
    categor: "Technology",
  },
];

const emplloyeSlice = createSlice({
  name: "employ",
  initialState,
  reducers: {
    categorHandler(state, action) {
      state = initialState;
      if (action.payload.categor !== "All") {
        return state.filter(
          (item, inx) => item.categor === action.payload.categor
        );
      } else {
        return (state = initialState);
      }
    },
    monthHandler(state, action) {
      state = initialState;
      if (action.payload.month !== "All") {
        return state.filter((item, inx) => item.month === action.payload.month);
      } else {
        return (state = initialState);
      }
    },
    recentPostHandler(state, action) {
      state = initialState;
      return state.filter(
        (item, inx) => item.categor === action.payload.categor
      );
    },
    tagsHandler(state, action) {
      let arr = [];
      state = initialState;
      state.map((item, inx) => {
        item.tags.map((tag, inx) => {
          if (tag.name === action.payload.tag) {
            arr.push(item);
          }
        });
      });
      return (state = arr);
    },
    calendarHandler(state, action) {
      let arr = [];
      state = initialState;
      state.map((item, inx) => {
        if (
          item.day === action.payload.day &&
          item.month === action.payload.month &&
          item.year === action.payload.year
        ) {
          arr.push(item);
          state = arr;
        } else {
          state = arr;
        }
      });
      return state;
    },
  },
});

export const emplloyActions = emplloyeSlice.actions;

export default emplloyeSlice.reducer;
