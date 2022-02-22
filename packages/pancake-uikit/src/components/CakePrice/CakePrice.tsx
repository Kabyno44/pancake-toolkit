import React from "react";
import styled from "styled-components";
import { PancakeRoundIcon } from "../Svg";
import { Image } from "../Image";
import Text from "../Text/Text";
import Skeleton from "../Skeleton/Skeleton";
import { Colors } from "../../theme";

export interface Props {
  color?: keyof Colors;
  cakePriceUsd?: number;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const CakePrice: React.FC<Props> = ({ cakePriceUsd, color = "textSubtle" }) => {
  return cakePriceUsd ? (
    <PriceLink
      href="https://dexscreener.com/cronos/0xC20397D6D31d4A0ff76b94E4Eaed7a36f5c4d992"
      target="_blank"
    >
      <Image width={24} height={24} src="https://cyborgswap.netlify.app/images/tokens/cbo_logo.gif" mr="8px" />
      <Text color={color} bold>{`$${cakePriceUsd?.toFixed(3) ?? 0}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(CakePrice);
