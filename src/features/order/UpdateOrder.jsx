/* eslint-disable react/prop-types */
import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
import { updateOrder } from '../../services/apiRestaurant';
function UpdateOrder({ isSubmitting }) {
  const fetcher = useFetcher();
  return (
    <fetcher.Form className="text-right" method="PATCH">
      <Button type="primary" disabled={isSubmitting}>
        Set To Priority
      </Button>
    </fetcher.Form>
  );
}

export const action = async ({ params }) => {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
};

export default UpdateOrder;
