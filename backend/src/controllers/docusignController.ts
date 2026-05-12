/**
 * Propriété exclusive de RAKOTOAHIJOHN Tsioritiana Ryan - Tous droits réservés
 */
import { Request, Response } from 'express';
import docusignService from '../services/docusignService';

export const createSignatureRequest = async (req: Request, res: Response): Promise<void> => {
  try {
    const { documentPath, signerEmail, signerName } = req.body;

    if (!documentPath || !signerEmail || !signerName) {
      res.status(400).json({
        success: false,
        message: 'Tous les champs sont requis'
      });
      return;
    }

    const result = await docusignService.createEnvelope(documentPath, signerEmail, signerName);

    res.status(200).json({
      success: true,
      message: 'Demande de signature créée',
      data: result
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la création de la demande de signature'
    });
  }
};

export const getSignatureStatus = async (req: Request, res: Response): Promise<void> => {
  try {
    const { envelopeId } = req.params;

    const result = await docusignService.getEnvelopeStatus(envelopeId);

    res.json({
      success: true,
      data: result
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la récupération du statut'
    });
  }
};
