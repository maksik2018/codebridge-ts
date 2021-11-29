
const prefix = 'img';

const files = {
	byId: {
		'group': {
			width: 16,
			height: 16,
			viewBox: [0,0,16,16],
			data: '<path xmlns="http://www.w3.org/2000/svg" stroke="#363636" stroke-linecap="round" stroke-linejoin="round" d="M12 2.66675H3.99998C2.52722 2.66675 1.33331 3.86066 1.33331 5.33341V12.0001C1.33331 13.4728 2.52722 14.6667 3.99998 14.6667H12C13.4727 14.6667 14.6666 13.4728 14.6666 12.0001V5.33341C14.6666 3.86066 13.4727 2.66675 12 2.66675Z"/><path xmlns="http://www.w3.org/2000/svg" stroke="#363636" stroke-linecap="round" stroke-linejoin="round" d="M5.33331 1.33337V4.00004"/><path xmlns="http://www.w3.org/2000/svg" stroke="#363636" stroke-linecap="round" stroke-linejoin="round" d="M10.6666 1.33337V4.00004"/><path xmlns="http://www.w3.org/2000/svg" stroke="#363636" stroke-linecap="round" stroke-linejoin="round" d="M1.33331 6.66675H14.6666"/>'
		}
	},
	allIds: [
		'group'
	]
}


function SVG(props) {

	if(props.isHidden) {
		return <svg display='none'>{props.children}</svg>;
	}

	let file = files.byId[props.id];

	if(!file) return null;

	let width   = props.width  || file.width  || null;
	let height  = props.height || file.height || null;
	let viewBox = file.viewBox
		? file.viewBox.join(' ')
		: '0 0 '+props.width+' '+props.height;

	return props.isHidden
		? <svg display='none'>{props.children}</svg>
		:(
		<svg
			xmlns='http://www.w3.org/2000/svg'
			version='1.1'
			preserveAspectRatio='xMinYMin'
			width={width}
			height={height}
			viewBox={viewBox}
		>
			<use xlinkHref={'#'+prefix+'-'+props.id}/>
		</svg>
	);

}


function SVGSource(props) {

	return (
		<SVG isHidden={true}>
			<defs>
				{files.allIds.reduce((defs, fileId, fileIndex)=>{
					const file = files.byId[fileId];
					return defs.concat(
						<g
							key={fileIndex}
							id={prefix+'-'+fileId}
							dangerouslySetInnerHTML={{__html: file.data}}
						>
						</g>
					);
				}, [])}
			</defs>
		</SVG>
	);

}


export {
	SVG,
	SVGSource
}
