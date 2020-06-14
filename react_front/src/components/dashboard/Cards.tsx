import React, { FC } from "react";
interface Props {
  cardData?: any;
  title: string;
}
const Cards: FC<Props> = (props: Props) => {
  const { title, cardData } = props;
  return (
    <div className="card">
      <div className="card-header">
        <h4>{title}</h4>
      </div>
      {cardData && (
        <div className="card-body">
          <div className="row">
            <div className="col-1">Header</div>
            <div className="col-8">{cardData.header}</div>
          </div>
          <div className="row">
            <div className="col-1">Body</div>
            <div className="col-8">{cardData.body}</div>
          </div>
          <div className="row">
            <div className="col-1">Footer</div>
            <div className="col-8">{cardData.footer}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cards;
