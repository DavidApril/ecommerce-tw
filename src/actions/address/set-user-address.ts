import { Address } from '@/interfaces';
import prisma from '@/lib/prisma';

export const setUserAddress = async (address: Address, userId: string) => {
  try {
    const newAddres = await createOrReplaceAddress(address, userId);

    return {
      ok: true,
      address: address,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: 'Cannot record this address',
    };
  }
};

const createOrReplaceAddress = async (address: Address, userId: string) => {
  try {
    const storedAddress = await prisma.userAddress.findUnique({
      where: { userId },
    });

    const addressToSave = {
      userId,
      name: address.name,
      address: address.address,
      address2: address.address2,
      countryId: address.country,
      phone: address.phone,
      postalCode: address.postalCode,
    };

    if (!storedAddress) {
      const newAddress = await prisma.userAddress.create({
        data: addressToSave,
      });

      return newAddress;
    }

    const updatedAddress = await prisma.userAddress.update({
        where: { userId },
        data: addressToSave,
    })

    return updatedAddress;

  } catch (error) {
    console.log(error);
    throw new Error('Cannot record this address');
  }
};
