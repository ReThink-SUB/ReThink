import React from "react";
import { Blog } from "../components";

export function BlogContainer() {
  return (
    <>
      <Blog>
        <Blog.LeftSect>
          <Blog.SubTitle>
            Put an end to {"\n"}<br />
            <em style={{ color: "black" }}> climate change.</em>
          </Blog.SubTitle>
          <Blog.InnerSect>
            <Blog.Description>
            Easy ways to positively impact the environment.{" "}
            </Blog.Description>
            <Blog.MobileCard
              src="BallardMarket.jpg"
              label="Ballard Market"
              type="Grocery Store"
            />
          </Blog.InnerSect>
        </Blog.LeftSect>
        <Blog.RightSect>
          <Blog.RightCard
            src="BallardMarket.jpg"
            label="Ballard Market"
            type="Grocery Store"
          />
          <Blog.LeftCard
            src="IndianMarket.png"
            label="Indian Market"
            type="Grocery Store"
          />
        </Blog.RightSect>
      </Blog>
    </>
  );
}
