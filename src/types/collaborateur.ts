import { type StyleCardAvatar } from './styleCardAvatar'

export type Collaborateur = {
	avatar_img: string
	name: string
	surname: string
	functions: { firstRow: string; secondRow: string }
	description: string
	reseau_link: { github: string; linkedin: string }
	style_card: StyleCardAvatar
}
