import React from "react";
import "../about.css";
import styles from '../style'

const DescriptionSection = () => {
	return (
		<div className="AboutSec3">
			<h2 className="discAbt">Description</h2>
			<p className="disTxt">
				At Ksham Innovation, we break down barriers and make technology
				accessible to everyone. We believe that everyone deserves the
				opportunity to hear, speak, and navigate the world in real-time,
				regardless of having hearing, speech, or visual impairment.
			</p>
			<p className="disTxt">
				Our technology is designed to empower those with disabilities,
				allowing them to learn, communicate &amp; perform their daily
				chores with greater ease and independence. But our work doesn't
				stop there. We dream &amp; envision creating a smart and safer
				alternative to traditional earbuds and headphones, extending the
				age during which people may face difficulties in hearing.
			</p>
			<p className="disTxt">
				By doing so, we are not only improving the lives of those with
				hearing loss, but also providing a solution for anyone who wants
				to enjoy music, information access in a safer way, and audio
				content while minimizing the risk of damaging their hearing.
			</p>
		</div>
	);
};

const WhatWeDoSection = () => {
	return (
		<div className="AboutSec1">
			<div className="aboutBack"></div>
			<div className="AboutPart">
				<h2 className="aboutSecHead">What We Do</h2>
				<div className="abtCard">
					<p className="abtCardText text-white">
						We at Ksham Innovation work to provide smart aid glasses
						for Deaf, Mute and Blind. The Able glasses uses patented
						bone conduction to enable Deaf to Listen, interpret sign
						language for mute, the sensory audio-based information
						enables the blind to visualize. The open ear design
						makes able glasses a complete smart glasses device for
						everyone.
					</p>
				</div>
			</div>
			<p className="sec1Text">
				Our mission is to make Information, Education &amp;
				Entertainment accessible through Smart Wearable Solutions.
			</p>
		</div>
	);
};

const OurVisionSection = () => {
	return (
		<div className="AboutSec2">
			<h2 className="abthead2">Our Vision</h2>
			<p className="abttext">
				<span>"Empowering a World Without Communication Barriers"</span>
				: Our vision is to leverage cutting-edge technology to empower
				individuals with hearing, speech, or visual impairments,
				fostering a more inclusive and accessible world. We envision a
				future where our smart glasses become a bridge to communication,
				independence, and endless possibilities, allowing everyone,
				regardless of their abilities, to connect, express themselves,
				and thrive in our interconnected society.
			</p>
			<div className="circleAbtSec2"></div>
		</div>
	);
};

const About = () => {
	return (
		<div id="about">
			<div className={`${styles.flexCenter} flex-wrap w-full mb-12`}>
				<h2 className={styles.heading2} >
                <br className="sm:block hidden" />
					Know About us <br className="sm:block hidden" />
				</h2>
				<div className="AboutPage">
					<DescriptionSection />
					<WhatWeDoSection />
					<OurVisionSection />
				</div>
			</div>
		</div>
	);
};

export default About;
