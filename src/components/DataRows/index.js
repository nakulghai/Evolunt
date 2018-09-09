import React from 'react';
import List from './../Atoms/List';

const DataRows = ({
	data,
	onDelete,
	onEdit,
	editFlag,
	editSubmitButton
}) => {
	return(
			<div>
				<table>
				{
					data.map((data, index) => {
						return (
							<div key = { index }>
								<List 
									firstName={ data.firstName }
									lastName={ data.lastName }
									email={ data.email }
									phoneNumber={ data.phoneNumber }
									status={ data.radio }
									id={ data.id }
									onDelete= { onDelete }
									onEdit= { onEdit }
									defaultFirstName={ data.firstName }
									defaultLastName={ data.lastName }
									defaultEmail={ data.email }
									defaultPhoneNumber={ data.phoneNumber }
									defaultStatus={ data.radio }									
									editSubmitButton={ editSubmitButton }
									editFlag= {editFlag}									
								/>
							</div>
						)
					})
				}
				</table>
			</div>
		);
}

export default DataRows;