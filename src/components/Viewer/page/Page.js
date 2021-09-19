import React, { useContext, useEffect } from 'react';
import './Page.scss';
import './template1.scss';
import './template2.scss';
import './template3.scss';
import './template4.scss';
import {
	FaEnvelope,
	FaMobileAlt,
	FaMapMarkerAlt,
	FaLinkedinIn,
	FaGithub,
	FaCodepen,
	FaCode,
	FaTwitter,
} from "react-icons/fa";
import { ResumeJSONContext } from '../../../store/context/ResumeJSON';
import profileImage from '../../../assets/ME.jpg';
import { AppContext } from '../../../store/context/AppContext';

function Page() {
	const app = useContext(AppContext);
	const { state, dispatch } = useContext(ResumeJSONContext);

	useEffect(() => {
		if (app.state.activeView === 'printView') {
			window.print();
			window.onafterprint = app.dispatch({ type: 'UPDATE_VIEW', view: 'main' });
		}
	}, [app]);

	const updateEntry = (key, value) => {
		dispatch({ type: 'UPDATE_ONE_VALUE', key, value });
	};

	const headerTemplate = (header, key) => {
		return (
			<>
				<div
					className="userName"
					contentEditable={state.header.userName ? true : false}
					onBlur={(e) =>
						updateEntry(key + '.userName', e.currentTarget.textContent)
					}
				>
					{header.userName}
				</div>
				<div
					className="designation"
					contentEditable={state.header.designation ? true : false}
					onBlur={(e) =>
						updateEntry(key + '.designation', e.currentTarget.textContent)
					}
				>
					{header.designation}
				</div>
				<div
					className="summary"
					contentEditable={state.header.summary ? true : false}
					onBlur={(e) =>
						updateEntry(key + '.summary', e.currentTarget.textContent)
					}
				>
					{header.summary}
				</div>
			</>
		);
	};

	const iconSelector = (name) => {
		switch (name) {
			case 'email':
				return <FaEnvelope />;
			case 'mobile':
				return <FaMobileAlt />;
			case 'location':
				return <FaMapMarkerAlt />;
			case 'linkedIn':
				return <FaLinkedinIn />;
			case 'github':
				return <FaGithub />;
			case 'codepen':
				return <FaCodepen />;
			case 'twitter':
				return <FaTwitter />;
			default:
				return <FaCode />;
		}
	};
	const contactBarTemplate = (contact, key) => {
		return contact.map(
			(item, index) =>
				item.isVisible && (
					<>
						<div className="group" key={item.index}>
							{iconSelector(item.name)}
							<span
								className="name"
								contentEditable={state.header.userName ? true : false}
								onBlur={(e) =>
									updateEntry(
										key + index + '].value',
										e.currentTarget.textContent,
									)
								}
							>
								{item.value}
							</span>
						</div>
					</>
				),
		);
	};

	const bodyTemplate = () => {
		const mainSide = [];
		const subSide = [];

		state.body.map((section, index) => {
			if (section.mainSide) {
				return mainSide.push(sectionTypeIndentifier(section, index));
			}
			return subSide.push(sectionTypeIndentifier(section, index));
		});
		return (
			<>
				<div className="mainSide">{mainSide}</div>
				<div className="subSide">{subSide}</div>
			</>
		);
	};

	const sectionTypeIndentifier = (section, index) => {
		let key = 'body[' + index + ']';
		if (!section.isVisible) return null;
		switch (section.type) {
			case 'singleItemList':
				return singleItemListTemplate(section, key);
			case 'multiItemList':
				return multiItemListTemplate(section, key);
			case 'keyPoints':
				return keyPointsTemplate(section, key);
			default:
				return null;
		}
	};

	const listTemplate = (list, key) =>
		list.map((item, index) => (
			<>
				<div className="item">
					<div className="icon">-</div>
					<div
						className="detail"
						contentEditable
						onBlur={(e) =>
							updateEntry(key + '[' + index + ']', e.currentTarget.textContent)
						}
					>
						{item}
					</div>
				</div>
			</>
		));

	const dateFormatter = (startDate, endDate) => {
		return (
			<>
				{startDate}
				{startDate && endDate && ' - '} {endDate}
			</>
		);
	};

	const itemListBody = (body, priority, key) => {
		return (
			body.isVisible && (
				<>
					<div className="header">
						<span
							className="main"
							contentEditable={body.header ? true : false}
							onBlur={(e) =>
								updateEntry(key + '.header', e.currentTarget.textContent)
							}
						>
							{body?.header}
						</span>
						{(body.startDate || body.endDate) && (
							<span className="date">
								({dateFormatter(body.startDate, body.endDate)})
							</span>
						)}
					</div>
					<div
						className="listHeader"
						contentEditable={body.listHeader ? true : false}
						onBlur={(e) =>
							updateEntry(key + '.listHeader', e.currentTarget.textContent)
						}
					>
						{body?.listHeader}
					</div>
					{body?.header && priority < 3 && (body.startDate || body.endDate) && (
						<div className="listSubHeader">
							<div className="date">
								{dateFormatter(body.startDate, body.endDate)}
							</div>
							<div className="location">{body?.location}</div>
						</div>
					)}
					<div className="summary">
						<div
							className="summary-name"
							contentEditable={body.summary?.name ? true : false}
							onBlur={(e) =>
								updateEntry(key + '.summary.name', e.currentTarget.textContent)
							}
						>
							{body.summary?.name}
						</div>
						<div className="summary-list">
							{body.summary?.list &&
								listTemplate(body.summary.list, key + '.summary.list')}
						</div>
					</div>
				</>
			)
		);
	};
	const keyPointsBody = (point, priority, diableranking, key) => (
		<>
			<div
				className={
					'prority-' +
					(point.ranking && !diableranking ? point.ranking : priority)
				}
				contentEditable={point.header ? true : false}
				onBlur={(e) =>
					updateEntry(key + '.header', e.currentTarget.textContent)
				}
			>
				{point.header}
			</div>
		</>
	);

	const singleItemListTemplate = (section, key) => {
		return (
			<section className={'singleItemList priority-' + section.priority}>
				<div
					className="name"
					contentEditable={section.name ? true : false}
					onBlur={(e) =>
						updateEntry(key + '.name', e.currentTarget.textContent)
					}
				>
					{section.name}
				</div>
				{itemListBody(section.value, section.priority, key + '.value')}
			</section>
		);
	};

	const multiItemListTemplate = (section, key) => {
		return (
			<section className={'multiItemListTemplate priority-' + section.priority}>
				<div
					className="name"
					contentEditable={section.name ? true : false}
					onBlur={(e) =>
						updateEntry(key + '.name', e.currentTarget.textContent)
					}
				>
					{section.name}
				</div>
				{section.value.map((listItem) =>
					itemListBody(listItem, section.priority),
				)}
			</section>
		);
	};

	const keyPointsTemplate = (section, key) => {
		return (
			<section className="keyPoints">
				<div
					className="name"
					contentEditable={section.name ? true : false}
					onBlur={(e) =>
						updateEntry(key + '.name', e.currentTarget.textContent)
					}
				>
					{section.name}
				</div>
				<div className="pointList">
					{section.value.map((point, index) =>
						keyPointsBody(
							point,
							section.priority,
							section.diableranking,
							key + '.value[' + index + ']',
						),
					)}
				</div>
			</section>
		);
	};

	return (
		<>
			<div
				className={
					'page ' + app.state.activeView + ' ' + app.state.activeTemplate
				}
			>
				<div className="resume-header">
					{/* <div className="pofile-image">
            <img src={ profileImage } alt=""/>
          </div> */}
					<div className="header-info">
						{headerTemplate(state.header, 'header')}
					</div>
				</div>
				<div className="contact-bar">
					{contactBarTemplate(state.contact, 'contact[')}
				</div>
				<div className="resume-body">{bodyTemplate()}</div>
			</div>
		</>
	);
}

export default Page;
