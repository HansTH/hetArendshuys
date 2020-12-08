import S from '@sanity/desk-tool/structure-builder';
import { GoHome as Home } from 'react-icons/go';

const hiddenDocTypes = (listItem) => !['winkel'].includes(listItem.getId());

export default () =>
	S.list()
		.title('Content')
		.items([
			S.documentListItem()
				.schemaType('winkel')
				.title('Winkel')
				.icon(Home)
				.child(
					S.document().schemaType('winkel').documentId('winkel').title('winkel')
				),
			...S.documentTypeListItems().filter(hiddenDocTypes),
		]);
