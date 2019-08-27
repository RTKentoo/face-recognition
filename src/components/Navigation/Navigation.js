import React from 'react'
import styled from 'styled-components'
import tachyons from 'tachyons'

const SignOutWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	padding-right: 20px;
`

const Navigation = () => {
	return(
		<SignOutWrapper>
			<p className='f3 link dim black underline ps3 pointer'>Sign Out</p>
		</SignOutWrapper>
	)
}


export default Navigation 