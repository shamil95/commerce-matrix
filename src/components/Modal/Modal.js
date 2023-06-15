import {Button, Modal} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {setProductAndOpenModal} from "../../redux/actions/products";


const MyModal = () => {
    const dispatch = useDispatch();
    const {isModalOpen, modalProduct} = useSelector(state => state.products);

    const handleCancel = () => {
        dispatch(setProductAndOpenModal(null, false));
    }

    return (
            <Modal title={modalProduct?.title} open={isModalOpen} onCancel={handleCancel} footer={null}>
                <img src={modalProduct?.image} alt="" style={{width: '75px'}}/>
                <div>{modalProduct?.price}</div>
            </Modal>
    );
};


export default MyModal;
