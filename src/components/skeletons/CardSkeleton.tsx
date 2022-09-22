import {  Card, CardBody, CardSubtitle,CardTitle } from 'reactstrap'


const CardSkeleton=()=>{
    return (
        <>
          <Card
       className='border-0 mb-3 card  card_skeleton'
    style={{
      width: '100%'
    }}
  >
      <div className='card_swiper_frame bg-secondary bg-opacity-10'>
         <div style={{width:"100%",height:"200px"}}>
      
         </div>
      </div>
    <CardBody className='p-0 w-100 card_body_skeleton mb-3'>
      <CardTitle tag="div" className='card_title mt-1 h-25'>
     <div className='w-50 bg-secondary bg-opacity-10 h-100 rounded-3'><h6 className='adress mb-0 '></h6></div>
     <div className='pb-1 bg-secondary bg-opacity-10 w-25 h-100 rounded-2'>
     </div>
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted distance bg-secondary bg-opacity-10 w-50 h-25 rounded-2"
        tag="h6"
      >
       
      </CardSubtitle>
      <CardSubtitle
        className="mb-2 text-muted date bg-secondary bg-opacity-10 w-25 h-25 rounded-2"
        tag="h6"
      >
      
      </CardSubtitle>
      <CardSubtitle
      className="mb-0 price bg-secondary bg-opacity-10 w-75 h-25 rounded-2"
      tag="h6"
      >
 
      </CardSubtitle>
    </CardBody>
       </Card>
        </>
    )
}
export default CardSkeleton;