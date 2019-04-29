import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App = () => {
    return (
        <div className="ui container comments">
            <h3 className="ui dividing header">Comments</h3>
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    comment="Nice blog post!" 
                    author={faker.name.firstName()} 
                    date="Today at 5:42PM" 
                    avatar={faker.image.avatar()} 
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    comment="Great" 
                    author={faker.name.firstName()} 
                    date="Today at 5:50PM" 
                    avatar={faker.image.avatar()} 
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    comment="very nice" 
                    author={faker.name.firstName()} 
                    date="Today at 5:58PM" 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
};


ReactDOM.render(<App />, document.querySelector('#root'));

{/* <div>
    <Message>
        <div className="ui icon header">
            <i className="pdf file outline icon"></i>
            No documents are listed for this customer.
        </div>
        <div className="ui primary button">Add Document</div>
    </Message>
    <Message>
        <h4 class="ui header">For Your Information</h4>
        <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
        </p>
    </Message>
</div> 
const Message = (props) => {
    return (
        <div className="ui placeholder segment" >{props.children}</div>
    );
}*/}