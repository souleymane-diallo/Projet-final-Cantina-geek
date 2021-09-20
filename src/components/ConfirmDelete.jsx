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

const ConfirmDelete = ({onDeleteRecipe, recipe}) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const onClose = () => setIsOpen(false)
    const cancelRef = React.useRef()
    const deleteRef = React.useRef();
    console.log(deleteRef.current);
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
                Delete Customer
              </AlertDialogHeader>
              <AlertDialogBody>
                Are you sure? You can't undo this action afterwards.
              </AlertDialogBody>
  
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme="red" ref={deleteRef} ml={3}>
                  Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    )
}

export default ConfirmDelete
