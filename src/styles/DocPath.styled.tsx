import styled from 'styled-components';
import { setuColours } from '../../assets/setuColours';

export const DocPathStyled = styled.article`
  position: relative;

  .card-title {
    background-color: ${setuColours.flashTurk};
  }

  .breadcrumb-wrapper {
    padding: 0;

    li:not(:last-child) {
      margin-bottom: 0;
    }
  }

  &.loading {
    .markdown-content {
      height: 0;
      overflow-y: hidden;
      opacity: 0;
    }
  }

  .loading-spinner {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    z-index: -1;
  }

  .markdown-content {
    opacity: 1;
    transition: opacity 300ms;

    h1 {
      margin: 0.5em 0 0.67em 0;
    }

    h2 {
      margin: 0.83em 0 0.83em 0;
    }

    h3 {
      margin: 0.7em 0 0.7em 0;
    }

    h4 {
      margin: 0.67em 0 0.67em 0;
    }

    h5 {
      margin: 0.65em 0 0.65em 0;
    }

    h6 {
      margin: 1em 0 1em 0;
    }

    p {
      margin-bottom: 1em;
    }

    img {
      margin: 2em 0;
    }

    p + ul {
      margin-top: 0em;
    }

    ul {
      margin-bottom: 1.5em;
    }

    pre {
      margin-bottom: 1.5em;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      position: relative;
      scroll-margin-top: 85px;
      scroll-snap-margin-top: 85px; /* Safari */

      a {
        visibility: hidden;
        position: absolute;
        left: -0.9em;
        top: 50%;
        transform: translateY(-50%);
      }

      &:hover a {
        visibility: visible;
      }

      @media (max-width: 500px) {
        a {
          font-size: 16px;
        }
      }
    }

    .table-container {
      overflow-x: auto;
    }

    details {
      summary {
        position: relative;
        padding: 9px 0;
      }
      summary::after {
        display: inline-block;
        position: absolute;
        width: 8px;
        height: 8px;
        top: 16px;
        right: 18px;
        content: '';
        border-style: solid;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
        color: ${setuColours.fadedMing};
        transition: all 0.2s;
        cursor: pointer;
      }
      &[open] summary::after {
        transform: rotate(225deg);
        top: 18px;
      }
    }
  }

  .code-block-container {
    position: relative;

    .code-block-copy-btn {
      position: absolute;
      top: 8px;
      right: 8px;
      font-weight: 200;
    }
  }
`;
