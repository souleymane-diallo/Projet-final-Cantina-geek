import React from 'react'
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    Button,
    AlertDialogOverlay,
  } from "@chakra-ui/react"
  import {AiFillDelete} from 'react-icons/ai'

const ConfirmDelete = ({onDeleteRecipe, onId}) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const onClose = () => setIsOpen(false)
    const cancelRef = React.useRef()
    const id = onId;
    return (
        <>
        <Button leftIcon={<AiFillDelete />} 
          colorScheme="red" variant="outline" onClick={() => setIsOpen(true)}>
          Delete
        </Button>
  
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Supprission
              </AlertDialogHeader>
              <AlertDialogBody>
                Voulez-vous vraiment Supprimer cette recette ?
              </AlertDialogBody>
  
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Non
                </Button>
                <Button colorScheme="red" onClick={() => onDeleteRecipe(true, id)} ml={3}>
                  Oui
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    )
}

export default ConfirmDelete
