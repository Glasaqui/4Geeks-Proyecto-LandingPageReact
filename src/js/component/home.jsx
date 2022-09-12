import React from "react";
import reactDom from "react-dom";
import propTypes from "prop-types";
import {CardGroup,Card,Button,CardImg,CardBody,CardTitle,CardSubtitle,CardText } from 'reactstrap';

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Jumbotron = () => {
	return (
		<div>
		<div className="jumbotron">
			<h1 className="display-4">A Warm Welcome!</h1>
			<p className="lead">Loren ipsum dolor, sit amet consectetur adispicing eit. It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
			<hr className="my-4"/>
			<p className="lead">
				<a className="btn btn-primary btn-lg" href="#" role="button">Call to actions</a>
			</p>
		</div>
		
		<CardGroup>
		<Card>
			<CardImg
			alt="Card image cap"
			src="https://picsum.photos/318/180"
			top
			width="100%"
			/>
			<CardBody>
			<CardTitle tag="h5">
				Card title
			</CardTitle>
			<CardSubtitle
				className="mb-2 text-muted"
				tag="h6"
			>
				Card subtitle
			</CardSubtitle>
			<CardText>
				This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
			</CardText>
			<Button>
				Find out More!
			</Button>
			</CardBody>
		</Card>
		<Card>
			<CardImg
			alt="Card image cap"
			src="https://picsum.photos/318/180"
			top
			width="100%"
			/>
			<CardBody>
			<CardTitle tag="h5">
				Card title
			</CardTitle>
			<CardSubtitle
				className="mb-2 text-muted"
				tag="h6"
			>
				Card subtitle
			</CardSubtitle>
			<CardText>
				This card has supporting text below as a natural lead-in to additional content.
			</CardText>
			<Button>
			Find out More!
			</Button>
			</CardBody>
		</Card>
		<Card>
			<CardImg
			alt="Card image cap"
			src="https://picsum.photos/318/181"
			top
			width="100%"
			/>
			<CardBody>
			<CardTitle tag="h5">
				Card title
			</CardTitle>
			<CardSubtitle
				className="mb-2 text-muted"
				tag="h6"
			>
				Card subtitle
			</CardSubtitle>
			<CardText>
				This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
			</CardText>
			<Button>
			Find out More!
			</Button>
			</CardBody>
		</Card>
		<Card>
			<CardImg
			alt="Card image cap"
			src="https://picsum.photos/318/181"
			top
			width="100%"
			/>
			<CardBody>
			<CardTitle tag="h5">
				Card title
			</CardTitle>
			<CardSubtitle
				className="mb-2 text-muted"
				tag="h6"
			>
				Card subtitle
			</CardSubtitle>
			<CardText>
				This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
			</CardText>
			<Button>
			Find out More!
			</Button>
			</CardBody>
		</Card>

		</CardGroup>
		</div>
	);
};

export default Jumbotron;
