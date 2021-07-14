import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { format as formatDate } from 'date-fns';
import { ButtonBase } from '@material-ui/core';
import { ArrowForwardIos as ArrowIcon } from '@material-ui/icons';
import { tokens } from '../../../data/Tokens/tokens';
import { Text } from '../../../components/Text';


const StyledLink = styled(Link)`
text-decoration: none;
color: ${tokens.shades.black.heavier};

`;
const Base = styled(ButtonBase)`
    width: 100%;
    padding: ${tokens.spacing.m} ${tokens.spacing.l};
    justify-content: space-between;
    border-top: 1px solid ${tokens.shades.black.lighter};
    
`;
const Info = styled.div`
  flex-grow: 1;
  text-align: left;
  padding: 0 ${tokens.spacing.m};
  color: ${tokens.shades.black.medium};
`;

const Image = styled.img`
   width: 64px;
   height: 64px;
   border-radius: ${tokens.radius.l};
`;
export const User = (props) => {
    const { name, id, activity, image } = props;
    return (
        <StyledLink to={`/signin/${id}`}>
    <Base>
      <Image src={image} />
      <Info>
          <Text size="1">{name}</Text>
      <Text importance="secondary" size="s">Activity: {formatDate(activity, 'd MMM yyyy')}</Text>
      </Info>
     
          <ArrowIcon fontSize="small" />
      
    </Base>
    </StyledLink>
    )
}

export default User;