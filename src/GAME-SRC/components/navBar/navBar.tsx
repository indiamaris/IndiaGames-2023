/** @format */

import { HStack, Icon, Stack, Text } from '@chakra-ui/react';
import ColorModeSwitch from './colorModeSwitch';
import SearchInput from './searchInput';
import { SearchInputI } from '../../interfaces/interfaces';
import { TbDeviceGamepad2 } from 'react-icons/tb';

const NavBar = ({ onSearch }: SearchInputI) => (
	<HStack margin={'10px'}>
		<HStack>
			<HStack>
				<Stack mr={'100px'}>
					<HStack>
						<Stack>
							<Icon
								as={TbDeviceGamepad2}
								boxSize={'20px'}
							/>
							<Icon
								as={TbDeviceGamepad2}
								boxSize={'20px'}
							/>
						</Stack>
						<Stack>
							<Text
								lineHeight={'0'}
								fontSize={'55px'}
								fontWeight={'normal'}>
								INDIA{''}
							</Text>
						</Stack>
					</HStack>

					<Stack>
						<Text
							textAlign={'right'}
							lineHeight={'0'}
							fontSize={'25px'}
							color={'#f95283'}
							fontWeight={'light'}>
							games
						</Text>
					</Stack>
				</Stack>
			</HStack>
		</HStack>
		<HStack
			width={'100%'}
			justifyContent={'space-around'}>
			<HStack width={'100%'}>
				<SearchInput onSearch={onSearch} />{' '}
			</HStack>

			<HStack width={'20%'}>
				<ColorModeSwitch />
			</HStack>
		</HStack>
	</HStack>
);

export default NavBar;
