/** @format */

import { Card, CardBody, Heading } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { Game } from './interfaces';

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	return (
		<Card borderRadius={25} overflow={'hidden'}>
			<Image src={game.background_image} />
			<CardBody>
				<Heading fontSize={'2xl'}>{game.name}</Heading>
			</CardBody>
		</Card>
	);
};

export default GameCard;
