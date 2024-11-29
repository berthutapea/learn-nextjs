import AboutPage from "@/app/about/page";
import AboutLayout from "@/app/about/layout";
import { render, screen } from "@testing-library/react";

describe("About Page", () => {
  it("should render", () => {
    const page = render(
      <AboutLayout>
        <AboutPage />
      </AboutLayout>
    );
    expect(page).toMatchSnapshot();
  });
});
