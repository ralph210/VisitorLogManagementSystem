import React from 'react'
import { Typography, Divider, Container } from "@material-ui/core";

export default function Home() {
	return (
		<Container>
			<Typography paragraph>
				Welcome! This online Visitor Log Management System is an attempt to use online tools for the ease of communication process, thereby ensuring
				smooth transition between a visitor and a faculty and decrease latency time.
      </Typography>
			<Divider />
			<Typography paragraph>
				This project is designed by Group G6, as part of DBMS project under <b>Dr.  V. B. Nikam</b> for the IV Semester.
                    The students involved in the project are :
                    <ol>
					<li> Shubhankar K Gupta (Project Head) </li>
					<li> Harsimran Singh Virk </li>
					<li> Jash Seta </li>
					<li> Rishikesh Hirde </li>
				</ol>
			</Typography>

			<Typography paragraph>
				We would like to thank everyone for their help in making this successful, especially our professors!
      </Typography>
		</Container>
	)

}
