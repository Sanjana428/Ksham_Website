import React from "react";
// import "./styles.css"; // Import your CSS file where you define the styles
import styles, { layout } from "../style";
import svid from "../assets/svid.mp4";
import { battery } from "../assets";

const Innoexist = () => {
	return (
		<div className={layout.section} >
			<div className={layout.sectionInfo }>
				<h2 className={styles.heading2}>
					Why Able Innovation Exists{" "}
					<br className="sm:block hidden" />
				</h2>
				<div className={`flex md:flex-row flex-col ${styles.paddingY}`}>
				<video
					controls
					autoPlay
					loop
					className=" w-[500px] h-[300px] font-poppins font-normal text-[25px] leading-[32px] text-white my-20 "
					src={svid}
				></video>
				<p className={`${styles.paragraph} max-w-[470px] mt-5 mx-16 `}>
				<div className={`md:ml-6 ${styles.flexCenter} w-[8px] h-[8px] rounded-full bg-blue-gradient p-[2px] cursor-pointer m-[7px] `} style={{ display: 'inline-block' }}></div>
					Globally, there are over 680 million people who are deaf,
					hard of hearing, mute, or blind.
					<br className="sm:block hidden" />
					<br className="sm:block hidden" />
					<div className={`md:ml-6 ${styles.flexCenter} w-[8px] h-[8px] rounded-full bg-blue-gradient p-[2px] cursor-pointer m-[7px] `} style={{ display: 'inline-block' }}></div>
					India alone is home to more than 80 million individuals
					belonging to these diverse disability groups.
					<br className="sm:block hidden" />
					<br className="sm:block hidden" />
					<div className={`md:ml-6 ${styles.flexCenter} w-[8px] h-[8px] rounded-full bg-blue-gradient p-[2px] cursor-pointer m-[7px] `} style={{ display: 'inline-block' }}></div>
					Sadly, an estimated 90% of these individuals lack access to
					education and often face poverty.
					<br className="sm:block hidden" />
					<br className="sm:block hidden" />
					<div className={`md:ml-6 ${styles.flexCenter} w-[8px] h-[8px] rounded-full bg-blue-gradient p-[2px] cursor-pointer m-[7px] `} style={{ display: 'inline-block' }}></div>
					For these individuals, accessing essential information,
					education, and communication channels remains a significant
					challenge.
				</p>
				</div>
			</div>
		</div>
	);
};

export default Innoexist;

