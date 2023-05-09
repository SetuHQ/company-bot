import styled from 'styled-components';

export const SetuBotPreviewStyled = styled.div`
  .image-wrapper {
    margin: 0 -48px;
  }

  article {
    min-height: auto !important;
  }

  .metadata {
    display: none;
  }

  @media (max-width: 900px) {
    .image-wrapper {
      margin: 0 0;
    }
  }

  @media (max-width: 1200px) {
    .metadata {
      display: block;
    }
  }
`;
