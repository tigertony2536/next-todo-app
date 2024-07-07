import Lottie from "lottie-react";
import * as loadingAnimation from "../lotties/loadingAnimation.json";

export default function Loading() {
	return (
		<Lottie
			animationData={loadingAnimation}
			loop={true}
		/>
	);
}
