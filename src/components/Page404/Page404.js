import React from "react";
import { Page, CautionTape, Text, Text404 } from "./Page404.styles.js";
import cautionTape from "../../images/caution-tape.jpg";

function Page404() {
	return (
		<Page>
			<Text404 variant="h3">404: Page Not Found</Text404>
			<CautionTape src={cautionTape} alt="caution tape" />
			<Text>Well, this is tough...</Text>
		</Page>
	);
}

export default Page404;
