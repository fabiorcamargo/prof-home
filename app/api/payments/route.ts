// app/api/payments/route.ts
import { NextRequest, NextResponse } from 'next/server';
require('dotenv').config();

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const payId = searchParams.get('payId');

  const asaasUrl = process.env.ASAAS_URL;
  const asaasToken = process.env.ASAAS_TOKEN;
  
  if (!payId) {
    return NextResponse.json({ error: 'PayId é necessário' }, { status: 400 });
  }

  try {
    // Faz a requisição de pagamentos
    const paymentResponse = await fetch(`${asaasUrl}/v3/payments/${payId}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'access_token': asaasToken || '',
      },
    });

    const paymentData = await paymentResponse.json();
    
    // Verifica se o pagamento foi encontrado
    if (!paymentData || !paymentData.customer) {
      return NextResponse.json({ error: 'Pagamento ou cliente não encontrado' }, { status: 404 });
    }

    // Requisita o código QR e dados do cliente após obter o pagamento
    const [qrCodeResponse, getCustomerResponse] = await Promise.all([
      fetch(`${asaasUrl}/v3/payments/${payId}/pixQrCode`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'access_token': asaasToken || '',
        },
      }),
      fetch(`${asaasUrl}/v3/customers/${paymentData.customer}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'access_token': asaasToken || '',
        },
      }),
    ]);

    const [qrCodeData, customerData] = await Promise.all([
      qrCodeResponse.json(),
      getCustomerResponse.json(),
    ]);

    return NextResponse.json({
      payment: paymentData,
      pixQrCode: qrCodeData,
      customer: customerData,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao buscar pagamento ou QR Code' }, { status: 500 });
  }
}
