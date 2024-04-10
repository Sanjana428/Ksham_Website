import React from "react";
import "../contactdeta.css";
import lvid from "../assets/lvid.mp4";
import styles, { layout } from "../style";

const features = [
	"5 microphones",
	"Side speaker",
	"1080px camera",
	"Neural image processing",
	"Augmented reality",
];

const Working = () => {
	return (
		<div className="MainSec4">
			<div className="sec4circle"></div>
			<h2 className="MainSec4Heading">How Able Glasses Work</h2>
			<section className={layout.section}>
				<video
					controls
					autoPlay
					loop
					className="sec4vdo"
					src={lvid}
					alt=""
				></video>

				<ul className="font-poppins font-normal text-dimWhite text-[22px] leading-[24px]">
					{features.map((feature, index) => (
						<li key={index} className="flex items-center mb-4 ml-10 mt-8 ">
							<div className="w-4 h-4 rounded-full bg-blue-gradient mr-3"></div>
							<span>{feature}</span>
						</li>
					))}
				</ul>
			</section>
		</div>
	);
};

export default Working;
