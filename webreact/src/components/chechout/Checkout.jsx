import React, { useContext, useState } from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Button,
    Flex,
    Heading,
    Image,
    Box,
    Text,
  } from '@chakra-ui/react'
import { Timestamp, addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '../../config/firebase'
import Context from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { BeatLoader } from "react-spinners"



  const Checkout = () => {
    const [ user, setUser ] = useState({
        name: '',
        email: '',
        repeatedEmail: '',
        phone:''
    })
    const [ emailMatch, setEmailMatch ] = useState(true)
    const [ error, setError] = useState({})

    const { cart, getTotal, clearCart } = useContext(Context)

    const updateUser = (event) => {
        setUser((user) => ({
            ...user,
            [event.target.name]: event.target.value
       }))
    }

    const navigate = useNavigate()

    const validateEmails = () => {
        if(user.email === user.repeatedEmail) {
            setEmailMatch(true)
        }else{
            setEmailMatch(false)
        }
    }

    const validateForm = () => {
        const errors = {}
        if(!user.name){
            errors.name= "Tenés que agregar un nombre"
        }

        setError(errors)
        return Object.keys(errors).length === 0
    }

    const getOrder = async () => {
        const isFormValid = validateForm()
        validateEmails()
        if(isFormValid && emailMatch){
            
    const ordersCollection = collection(db, 'orders')
    
    try {
        for(const item of cart) {
            const productRef = doc(db, 'productos', item.id)
            const productDoc = await getDoc(productRef)

            const currentStock = productDoc.data().stock

            if(currentStock >= item.quantity) {
                await updateDoc(productRef, {
                    stock: currentStock - item.quantity
                })
            }else {
                
                console.log(`No hay suficiente stock para ${item.name}`)
            }
                   
           const order = {
                buyer: user,
                cart: cart,
                total: getTotal(),
                fechaDeCompra: Timestamp.now() 
                }
                
                      
          const orderDocRef = await addDoc(ordersCollection, order)           
          Swal.fire({
            title: 'Tu compra esta confirmada',
            text: `El numero de orden es: ${orderDocRef.id}`,
            icon: 'success',
            confirmButtonText: 'Cerrar'
          }).then(()=> {
             clearCart()
             navigate('/')
          })                
                   
        }
        } catch (error) {
                console.log(error)
            }

        }
    }

return (
    <Flex direction={'column'} justify={'center'} align={'center'} mt={10}>
    
        {
            cart.map((prod) => (
                <Flex key={prod.id}>
                    <Image src={prod.img} />
                </Flex>
            ))
        }

    <Heading mb={2}>Datos de facturación</Heading>

<FormControl w={'40%'}>
    <Input type='text' name='name' placeholder='Ingrese el nombre' onChange={updateUser} mb={2}/>
    <Input type='email' name='email' placeholder='Ingrese email' onChange={updateUser} mb={2}/>
    <Input type='email' name='repeatedEmail' placeholder='Ingrese nuevamente el email'  onChange={updateUser} mb={2}/>
    <Input type='text' name='phone' placeholder='Ingrese su teléfono' onChange={updateUser} mb={2}/>
    <Flex w={'100%'} justify={'center'} align={'center'}>
    <Button onClick={getOrder}>Finalizar compra</Button>
        </Flex>
        
</FormControl>

</Flex>
   ) }
  

export default Checkout