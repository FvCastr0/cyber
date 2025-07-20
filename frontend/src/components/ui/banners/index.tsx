"use client";

import ResponsiveImage from "@/components/shared/responsive-image";
import ShopButton, { ButtonStyle } from "@/components/shared/shop-button";
import { theme } from "@/components/shared/theme";
import styled from "styled-components";

const StyledBanner = styled.section`
  display: flex;
  width: 100%;

  @media (max-width: 1400px) {
    flex-wrap: wrap;
  }
`;

const BannerProducts = styled.article`
  display: flex;
  width: 50dvw;
  flex-direction: column;
  font-family: Inter;

  @media (max-width: 1400px) {
    width: 100dvw;
  }

  .playstation {
    background-color: ${theme.colors.white};
    display: flex;
    align-items: center;
    font-size: clamp(2rem, 3.2dvw, 5.5rem);

    h1 {
      font-weight: 600;
    }

    p {
      color: ${theme.colors.textSecondary};
      font-size: ${theme.typography.fontSize.lg};
      margin-top: 0.9rem;
      max-width: 400px;
      margin-right: ${theme.spacing.sm};
    }

    img {
      margin-right: 2.5dvw;
    }
  }
`;

const SecondaryProducts = styled.div`
  display: flex;

  @media (max-width: 700px) {
    flex-wrap: wrap;
  }

  div {
    width: 100%;
    display: flex;
    align-items: center;
  }

  div:first-child {
    background-color: #ededed;
  }

  div:last-child {
    background-color: #353535;
    h1 {
      color: ${theme.colors.white};
    }
  }

  .text {
    flex-direction: column;
    margin: 0 ${theme.spacing.sm};
  }
`;

const TitleSecondary = styled.h1`
  font-weight: 300;
  font-size: clamp(2rem, 2dvw, 4rem);
  line-height: 2.2rem;

  strong {
    font-weight: 600;
  }
`;

const Pharagraph = styled.p`
  color: #909090;
  font-size: ${theme.typography.fontSize.lg};
  margin-top: 0.9rem;
  line-height: 1.2rem;
`;

const MacbookBanner = styled.div`
  background-color: #dddddd;
  font-family: Inter;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;

  @media (max-width: 1400px) {
    width: 100%;
    text-align: center;
  }

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    text-align: center;
    justify-content: center;
    padding: ${theme.spacing.xl};

    img {
      width: 15rem;
      height: auto;
      margin-bottom: 2rem;
    }
  }

  @media (max-width: 450px) {
    padding: 2rem 1rem;
  }

  div {
    margin-left: 3dvw;
  }

  h1 {
    font-weight: 300;
    font-size: clamp(3rem, 5dvw, 6.5rem);
  }

  strong {
    font-weight: 600;
  }

  p {
    width: 360px;
  }
`;

const BannerContainer = styled.div`
  img {
    margin-right: 1rem;
  }

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    padding: ${theme.spacing.xl};

    img {
      width: 15rem;
      height: auto;
      margin-bottom: 2rem;
    }
  }

  @media (max-width: 450px) {
    padding: 2rem 1rem;
  }
`;

export default function Banners() {
  return (
    <StyledBanner>
      <BannerProducts>
        <BannerContainer className="playstation">
          <ResponsiveImage
            alt="Playstation 5"
            widthToChange={900}
            srcDesktop={"/images/banners/desktop/PlayStation.png"}
            widthDesktop={268}
            heightDesktop={328}
            srcMobile={"/images/banners/mobile/PlayStation.png"}
            widthMobile={190}
            heightMobile={190}
          />
          <div>
            <h1>Playstation 5</h1>
            <p>
              Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
              will redefine your PlayStation experience.
            </p>
          </div>
        </BannerContainer>
        <SecondaryProducts>
          <BannerContainer className="airpods">
            <ResponsiveImage
              alt="Air pods"
              widthToChange={900}
              srcDesktop={"/images/banners/desktop/airpods.png"}
              widthDesktop={104}
              heightDesktop={272}
              srcMobile={"/images/banners/mobile/airpods.png"}
              widthMobile={193}
              heightMobile={200}
            />

            <article className="text">
              <TitleSecondary>
                Apple AirPods <strong>Max</strong>
              </TitleSecondary>
              <Pharagraph>
                Computational audio. Listen, it&apos;s powerful
              </Pharagraph>
            </article>
          </BannerContainer>

          <BannerContainer className="vision">
            <ResponsiveImage
              alt="Apple Vision"
              widthToChange={900}
              srcDesktop={"/images/banners/desktop/vision.png"}
              widthDesktop={136}
              heightDesktop={190}
              srcMobile={"/images/banners/mobile/vision.png"}
              widthMobile={327}
              heightMobile={193}
            />

            <article className="text">
              <TitleSecondary>
                Apple Vision <strong>Pro</strong>
              </TitleSecondary>
              <Pharagraph>
                An immersive way to experience entertainment
              </Pharagraph>
            </article>
          </BannerContainer>
        </SecondaryProducts>
      </BannerProducts>

      <MacbookBanner>
        <div>
          <h1>
            Macbook <strong>Air</strong>
          </h1>
          <Pharagraph>
            The new 15‑inch MacBook Air makes room for more of what you love
            with a spacious Liquid Retina display.
          </Pharagraph>

          <ShopButton variant={ButtonStyle.dark} />
        </div>

        <ResponsiveImage
          alt="Macbook Pro"
          widthToChange={900}
          srcDesktop={"/images/banners/desktop/macbook.png"}
          widthDesktop={292}
          heightDesktop={502}
          srcMobile={"/images/banners/mobile/macbook.png"}
          widthMobile={281}
          heightMobile={171}
        />
      </MacbookBanner>
    </StyledBanner>
  );
}
