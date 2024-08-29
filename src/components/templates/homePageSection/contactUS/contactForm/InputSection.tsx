import Input from '@/components/shared/ui/Input'
import Label from '@/components/shared/ui/Label'
import React from 'react'
import { InputData } from '../../../../../../Type'

export default function InputSection() {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">

                {
                    InputData.map((data) => {
                        return (
                            <>

                                {
                                    !data.textarea ?
                                        <div className="space-y-2">
                                            <Label text={data.labeltext} display="block" fontSize="0.875rem" lineHeight="1.25rem" fontWeight="500" color="--white" />
                                            <Input placeholder={data.placeholder} width="100%" padding="0.5rem" border="1px" borderColor=" --dim-grey" borderRadius="0.375rem" backgroundColor="--black-" color="--white" />
                                        </div>
                                        :
                                        <div className="md:col-span-2">
                                            <Label text={data.labeltext} display="block" fontSize="0.875rem" lineHeight="1.25rem" fontWeight="500" color="--white" />
                                            <Input placeholder={data.placeholder} width="100%" padding="0.5rem" border="1px" borderColor=" --dim-grey" borderRadius="0.375rem" backgroundColor="--black-" color="--white" />

                                        </div>
                                }
                            </>
                        )
                    })
                }

            </div>
        </>
    )
}
