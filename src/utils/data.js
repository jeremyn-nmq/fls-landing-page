import flag1 from "../images/flag1.png";
import flag2 from "../images/flag2.png";
import flag3 from "../images/flag3.png";
import flag4 from "../images/flag4.png";
import phoneIcon from "../images/cta-phone.png";
import zaloIcon from "../images/cta-zalo.png";

export const FAQ = [
	{
		"question": "faq_question1",
		"answer": "faq_answer1"
	},
	{
		"question": "faq_question2",
		"answer": "faq_answer2"
	},{
		"question": "faq_question3",
		"answer": "faq_answer3"
	},{
		"question": "faq_question4",
		"answer": "faq_answer4"
	},{
		"question": "faq_question5",
		"answer": "faq_answer5"
	},
	{
		"question": "faq_question6",
		"answer": "faq_answer6"
	},
	{
		"question": "faq_question7",
		"answer": "faq_answer7"
	},
	{
		"question": "faq_question8",
		"answer": "faq_answer8"
	}
]

export const MOCK_BANNER_IMGS = {
	area1: [flag1, flag1, flag1],
	area2: [flag2, flag2, flag2],
	area3: [flag3, flag3, flag3],
	area4: [flag4, flag4, flag4],
};

export const CTA_ITEMS = [
	{
		logo: phoneIcon,
		name: "phone",
		order: 1,
		info: {
			href: "tel: +84987003278",
			label: '(+84) 987 003 278'
		}
	},
	{
		logo: zaloIcon,
		name: "zalo",
		order: 2,
		info: {
			href: "https://zalo.me/0987003278",
			label: '0987003278',
			newPage: true,
		}
	}
]


export const BANNER_ITEMS = [
	{
		"heading": "banner_heading1",
		"subHeading":"banner_subheading1",
		"content": [
			flag1,
			flag2,
			flag3
		]
	},
	{
		"heading": "banner_heading2",
		"subHeading":"banner_subheading2",
		"content": [
			flag1,
			flag2,
			flag3
		]
	},
	{
		"heading": "banner_heading3",
		"subHeading":"banner_subheading3",
		"content": [
			flag1,
			flag2,
			flag3
		]
	},
	{
		"heading": "banner_heading4",
		"subHeading":"banner_subheading4",
		"content": [
			flag1,
			flag2,
			flag3
		]
	}
]

export const TRANSPORT_ROUTES = [
	{
		id: 'vn',
		flag: flag1,
		alt: 'vietnam-flag'
	},
	{
		id: 'cn',
		flag: flag2,
		alt: 'china-flag'
	},
	{
		id: 'kh',
		flag: flag3,
		alt: 'cambodia-flag'
	},
	{
		id: 'la',
		flag: flag4,
		alt: 'laos-flag'
	}
]
