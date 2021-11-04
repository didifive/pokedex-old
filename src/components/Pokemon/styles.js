import styled from "styled-components";

export const PokemonStyles = styled.div.attrs(props => ({
  textColor: props.textColor || '#FFF',
}))`
  h1 {
    font-size: 3rem;
  }

  .fadeIn {
    -webkit-animation: fadein 1s; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadein 1s; /* Firefox < 16 */
    -o-animation: fadein 1s; /* Opera < 12.1 */
    animation: fadein 1s;
    animation-name: fadein;
    animation-play-state: running;
  }

  .Section-Heading {
    color: ${props => props.textColor};
    opacity: 1;
    transition: opacity 0.6s ease-in-out;
  }

  .bioDiv {
    color: ${props => props.textColor};
    margin-right: 0;
    opacity: 1;
    padding-right: 0;
    transition: opacity 0.6s ease-in-out;
  }

  .statDiv {
    padding-left: 0;
    padding-right: 3rem !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
  }

  .statDiv,
  .table tr td {
    color: ${props => props.textColor};
  }

  .statDiv,
  .table tr td button {
    color: ${props => props.textColor};
  }

  .ability,
  .variety {
    border-radius: 2px;
    padding: 2px 3px;
    margin-right: 6px;
    white-space: nowrap;
    line-height: initial;
  }

  .icon {
    border-radius: 4px;
    height: 30px;
    width: 5rem;
    filter: saturate(100%) brightness(110%);
    transition: 200ms all;
    margin: 0 0 0 15px;
  }

  .icon span {
    color: white;
    padding: 5px;
    margin: 0;
    display: flex;
    justify-content: center;
  }
  .Image {
    opacity: 1;
    transition: opacity 0.6s ease-in-out;
  }

  .image-container {
    position: relative;
    padding-bottom: calc(85% + 10px);
    height: 0;
    overflow: hidden;
    margin: auto;
  }

  .image-container img {
    position: relative;
    top: 0;
    left: 0;
  }

  .progress-bar {
    width: 0;
    font-size: 1rem;
    text-align: right;
    transition: width 1s ease-in;
  }

  .progress-bar span {
    padding-right: 4px;
  }

  @media only screen and (min-width: 992px) {
    .bioDiv {
      perspective: 400px;
      margin: auto 0;
      width: 37em;
      font-size: large;
    }

    .bioDiv:hover .inner {
      transform: rotate(0);
    }

    .bioDiv .inner {
      transition: 0.3s;
      transform: rotateY(30deg);
    }

    .statDiv:hover .inner {
      transform: rotate(0);
    }

    .statDiv .inner {
      transition: 0.3s;
      transform: rotateY(-30deg);
      width: 100%;
      padding-right: 3em;
    }

    .statDiv {
      perspective: 400px;
      margin: 4em auto;
      width: 37em;
      padding-left: 0;
      font-size: large;
      padding-right: 1em;
      -webkit-font-smoothing: antialiased !important;
    }
  }

  @media (max-width: 991px) {
    .bioDiv {
      padding-left: 0 !important;
    }
    .bioDiv .inner {
      padding: 0 !important;
      width: 100%;
    }
    .ability .variety {
      white-space: pre !important;
    }
    table td {
      padding: 0.5rem;
    }
    .formsBlock {
      padding-top: 4px !important;
    }
  }

  @media (max-width: 500px) {
    .Section-Heading {
      font-size: x-large;
    }
    table td {
      padding: 0.5rem;
    }
    .abilities,
    .varieties {
      font-size: small !important;
    }
    .varieties {
      display: inline-block;
    }

    .bioDiv .inner {
      width: min-content;
    }
    .statDiv .inner {
      padding-top: 1rem;
    }
    .statDiv {
      padding-right: 0 !important;
    }
  }

  @media (max-width: 340px) {
    .statDiv .inner {
      font-size: x-small !important;
      padding-top: 1rem;
    }
  }
`

export const Badge = styled.div`
  &.Normal {
    background-color: #a8a878;
    box-shadow: 0 0 20px #a8a878;
    color: #fff;
  }

  &.Fire {
    background-color: #f08030;
    box-shadow: 0 0 20px #f08030;
    color: #fff;
  }

  &.Water {
    background-color: #6890f0;
    box-shadow: 0 0 20px #6890f0;
    color: #fff;
  }

  &.Electric {
    background-color: #f8d030;
    box-shadow: 0 0 20px #f8d030;
    color: #fff;
  }

  &.Grass {
    background-color: #78c850;
    box-shadow: 0 0 20px #78c850;
    color: #fff;
  }

  &.Ice {
    background-color: #98d8d8;
    box-shadow: 0 0 20px #98d8d8;

    color: #fff;
  }

  &.Ground {
    background-color: #e0c068;
    box-shadow: 0 0 20px #e0c068;

    color: #fff;
  }

  &.Flying {
    background-color: #a890f0;
    box-shadow: 0 0 20px #a890f0;

    color: #fff;
  }

  &.Ghost {
    background-color: #705898;
    box-shadow: 0 0 20px #705898;

    color: #fff;
  }

  &.Rock {
    background-color: #b8a038;
    box-shadow: 0 0 20px #b8a038;

    color: #fff;
  }

  &.Fighting {
    background-color: #c03028;
    box-shadow: 0 0 20px #c03028;

    color: #fff;
  }

  &.Poison {
    background-color: #a040a0;
    box-shadow: 0 0 20px #a040a0;

    color: #fff;
  }

  &.Psychic {
    background-color: #f85888;
    box-shadow: 0 0 20px #f85888;

    color: #fff;
  }

  &.Bug {
    background-color: #a8b820;
    box-shadow: 0 0 20px #a8b820;

    color: #fff;
  }

  &.Dark {
    background-color: #705848;
    box-shadow: 0 0 20px #705848;

    color: #fff;
  }

  &.Steel {
    background-color: #b8b8d0;
    box-shadow: 0 0 20px #b8b8d0;

    color: #fff;
  }

  &.Dragon {
    background-color: #7038f8;
    box-shadow: 0 0 20px #7038f8;

    color: #fff;
  }
`;

export const ProgressDiv = styled.div`
  &.progress-bar {
    /* background-color: white; */
    width: 0;
    height: 20px;
    font-size: 1rem;
    text-align: right;
    transition: width 1s ease-in;
    animation-play-state: running;
  }

  &.progress-bar span {
    padding-right: 4px;
  }
`;
